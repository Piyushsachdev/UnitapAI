const { z } = require("zod");

const OcrSpaceResponseSchema = z.object({
  ParsedResults: z
    .array(
      z.object({
        ParsedText: z.string().optional().default("")
      })
    )
    .optional()
    .default([]),
  OCRExitCode: z.number().optional(),
  IsErroredOnProcessing: z.boolean().optional(),
  ErrorMessage: z.union([z.string(), z.array(z.string())]).optional()
});

async function ocrSpaceBusinessCard({ apiKey, imageBuffer }) {
  const form = new FormData();
  form.append("apikey", apiKey);
  form.append("language", "eng");
  form.append("isOverlayRequired", "false");
  form.append("file", new Blob([imageBuffer]), "card.jpg");

  let res;
  try {
    res = await fetch("https://api.ocr.space/parse/image", {
      method: "POST",
      body: form
    });
  } catch (err) {
    throw new Error(`OCR.Space network error: ${err?.message || err}`);
  }

  const json = await res.json();
  const parsed = OcrSpaceResponseSchema.parse(json);

  const errs = parsed.ErrorMessage;
  if (parsed.IsErroredOnProcessing || errs) {
    const msg = Array.isArray(errs) ? errs.join("; ") : errs || "OCR failed";
    throw new Error(msg);
  }

  const text = (parsed.ParsedResults || [])
    .map((r) => r.ParsedText || "")
    .join("\n")
    .trim();

  return { rawText: text, providerResponse: parsed };
}

module.exports = { ocrSpaceBusinessCard };

