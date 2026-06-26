import { Link } from "react-router-dom";
import { Brain, LayoutDashboard, Database, MessageSquare } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-card border-r border-border p-6">
      <div className="flex items-center gap-3 mb-10">
        <Brain className="text-primary" />
        <h1 className="text-xl font-bold text-gradient">
          Echooo
        </h1>
      </div>

      <nav className="space-y-3">
        <Link to="/dashboard" className="block p-3 rounded-lg hover:bg-secondary">
          <LayoutDashboard className="inline mr-2" size={18} />
          Dashboard
        </Link>

        <Link to="/vault" className="block p-3 rounded-lg hover:bg-secondary">
          <Database className="inline mr-2" size={18} />
          Memory Vault
        </Link>

        <Link to="/chat" className="block p-3 rounded-lg hover:bg-secondary">
          <MessageSquare className="inline mr-2" size={18} />
          AI Chat
        </Link>
      </nav>
    </div>
  );
}
