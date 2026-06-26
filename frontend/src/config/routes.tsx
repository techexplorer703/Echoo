import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ChatPage from "../pages/Chat/ChatPage";
import VaultPage from "../pages/Vault/VaultPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/vault" element={<VaultPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}