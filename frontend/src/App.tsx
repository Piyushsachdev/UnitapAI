import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CreateProfilePage } from "./pages/CreateProfilePage";
import { ViewProfilePage } from "./pages/ViewProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { OcrScannerPage } from "./pages/OcrScannerPage";
import { MeetingCompanionPage } from "./pages/MeetingCompanionPage";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/profiles/new" element={<CreateProfilePage />} />
        <Route path="/p/:username" element={<ViewProfilePage />} />
        <Route path="/scanner" element={<OcrScannerPage />} />
        <Route path="/meeting-companion" element={<MeetingCompanionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

