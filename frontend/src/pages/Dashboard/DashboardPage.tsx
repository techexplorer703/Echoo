import Sidebar from "../../components/layout/Sidebar";
import StatCard from "../../components/dashboard/cards/StatCard";
export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="content">
        <h1>Welcome Back Nova</h1>

        <div className="stats-grid">
          <StatCard title="Total Memories" value="248" />
          <StatCard title="Documents" value="42" />
          <StatCard title="AI Conversations" value="156" />
          <StatCard title="This Week" value="18" />
        </div>

        <div className="dashboard-sections">
          <div className="recent-memories">
            <h2>Recent Memories</h2>

            <div className="memory-item">
              Meeting notes with design team
            </div>

            <div className="memory-item">
              Book summary: Atomic Habits
            </div>

            <div className="memory-item">
              Project ideas for Q2
            </div>
          </div>

          <div className="insights">
            <h2>AI Insights</h2>

            <div className="insight-card">
              You've been documenting work consistently.
            </div>

            <div className="insight-card">
              Your notes focus heavily on productivity.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}