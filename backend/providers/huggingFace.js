const { z } = require("zod");

async function hfRequest({ token, model, inputs, parameters }) {
  const res = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs, parameters })
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HF ${res.status}: ${text}`);
  }
  return JSON.parse(text);
}

async function hfTranscribeAudio({ token, audioBuffer }) {
  // Whisper model on HF Inference API (free tier with token; rate-limited)
  const model = "openai/whisper-large-v3-turbo";
  console.log(`Starting transcription with model: ${model}`);
  
  let res;
  try {
    res = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/octet-stream"
      },
      body: audioBuffer
    });
  } catch (err) {
    console.error("HF ASR Fetch Error:", err);
    throw new Error(`HF ASR Network Error: ${err.message}`);
  }

  const text = await res.text();
  console.log(`HF ASR Response Status: ${res.status}`);
  
  if (!res.ok) {
    console.error("HF ASR Error Response:", text);
    // Handle model loading error (503 Service Unavailable)
    if (res.status === 503) {
      throw new Error("Hugging Face model is currently loading. Please wait a minute and try again.");
    }
    throw new Error(`HF ASR ${res.status}: ${text}`);
  }

  let json;
  try {
    json = JSON.parse(text);
  } catch (err) {
    console.error("HF ASR JSON Parse Error:", text);
    throw new Error("Failed to parse Hugging Face response.");
  }

  const Schema = z.object({ text: z.string().optional().default("") });
  const parsed = Schema.parse(json);
  console.log(`Transcription completed. Length: ${parsed.text.length}`);
  return parsed.text.trim();
}

async function hfSummarize({ token, transcript }) {
  // Free summarization model; good enough for MVP.
  const model = "facebook/bart-large-cnn";
  const json = await hfRequest({
    token,
    model,
    inputs: transcript.slice(0, 12000),
    parameters: { max_length: 220, min_length: 60 }
  });

  const Schema = z.array(z.object({ summary_text: z.string() })).min(1);
  const parsed = Schema.parse(json);
  return parsed[0].summary_text.trim();
}

async function hfActionItems({ token, transcript }) {
  // Instruction model that works on text2text; output as bullet list.
  const model = "google/flan-t5-large";
  const prompt = [
    "Extract action items from this meeting transcript.",
    "Return 3-10 bullet points. If none, return an empty list.",
    "",
    transcript.slice(0, 12000)
  ].join("\n");

  const json = await hfRequest({
    token,
    model,
    inputs: prompt,
    parameters: { max_new_tokens: 180, temperature: 0.2 }
  });

  // HF text2text sometimes returns [{generated_text: "..."}]
  const Schema = z
    .array(z.object({ generated_text: z.string() }))
    .min(1);
  const parsed = Schema.parse(json);
  const out = parsed[0].generated_text.trim();

  const lines = out
    .split("\n")
    .map((l) => l.replace(/^\s*[-*]\s?/, "").trim())
    .filter(Boolean);

  return lines;
}

module.exports = { hfTranscribeAudio, hfSummarize, hfActionItems };

