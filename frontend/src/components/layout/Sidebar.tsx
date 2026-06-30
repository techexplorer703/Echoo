import "./Sidebar.css";

import { Link } from "react-router-dom";
import {
  Brain,
  LayoutDashboard,
  Database,
  MessageSquare,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <Brain color="#7c3aed" size={30} />
        <h1>Echooo</h1>
      </div>

      <nav className="sidebar-nav">

        <Link to="/dashboard" className="sidebar-link">
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link to="/vault" className="sidebar-link">
          <Database />
          Memory Vault
        </Link>

        <Link to="/chat" className="sidebar-link">
          <MessageSquare />
          AI Chat
        </Link>

      </nav>

    </aside>
  );
}