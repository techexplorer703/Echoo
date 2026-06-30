import {
  ArrowRight,
  BrainCircuit,
  Clock3,
  FileText,
  MessageSquareText,
  Mic,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import Sidebar from "../../components/layout/Sidebar";
import StatCard from "../../components/dashboard/cards/StatCard";
import Card from "../../components/ui/Card";
import "./DashboardPage.css";

type QuickAction = {
  title: string;
  description: string;
  icon: typeof Sparkles;
};

type MemoryItem = {
  title: string;
  timestamp: string;
  category: string;
};

type InsightItem = {
  title: string;
  subtitle: string;
};

type ActivityItem = {
  day: string;
  value: number;
  tone: "purple" | "teal" | "amber";
};

export default function DashboardPage() {
  const greeting = new Date().getHours() < 12 ? "Good Morning" : "Good Evening";
  const dateLabel = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const quickActions: QuickAction[] = [
    {
      title: "New Memory",
      description: "Capture something important in seconds.",
      icon: BrainCircuit,
    },
    {
      title: "Upload Document",
      description: "Save a PDF or note into your vault.",
      icon: FileText,
    },
    {
      title: "Voice Note",
      description: "Record ideas and let AI organize them.",
      icon: Mic,
    },
    {
      title: "Ask AI",
      description: "Summarize, search, and retrieve instantly.",
      icon: MessageSquareText,
    },
  ];

  const recentMemories: MemoryItem[] = [
    { title: "React architecture notes", timestamp: "12 min ago", category: "Note" },
    { title: "Product discovery interview", timestamp: "1 hr ago", category: "Interview" },
    { title: "Odoo study checklist", timestamp: "Today, 9:30", category: "Study" },
    { title: "Design system refinements", timestamp: "Yesterday", category: "System" },
  ];

  const insights: InsightItem[] = [
    {
      title: "Review React notes",
      subtitle: "A polished recap would strengthen your current sprint context.",
    },
    {
      title: "Continue Echooo project",
      subtitle: "Momentum is high. A short session will keep the flow intact.",
    },
    {
      title: "Odoo study reminder",
      subtitle: "A quick review on modules will keep your learning streak alive.",
    },
  ];

  const weeklyActivity: ActivityItem[] = [
    { day: "Mon", value: 82, tone: "purple" },
    { day: "Tue", value: 64, tone: "teal" },
    { day: "Wed", value: 91, tone: "purple" },
    { day: "Thu", value: 74, tone: "amber" },
    { day: "Fri", value: 88, tone: "teal" },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="content dashboard-page">
        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">AI Second Brain</p>
            <h1>
              {greeting}, Kishor <span aria-hidden="true">👋</span>
            </h1>
            <p className="hero-description">
              Your second brain processed 18 memories this week and is ready for a focused, calm session.
            </p>

            <div className="hero-meta">
              <span>{dateLabel}</span>
              <span>•</span>
              <span>2 new notes synced</span>
            </div>
          </div>

          <div className="hero-ring" aria-label="Productivity score 82 percent">
            <div className="hero-ring__inner">
              <span>82%</span>
              <small>focus</small>
            </div>
          </div>
        </section>

        <section className="dashboard-grid">
          <Card className="daily-brief-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Daily Brief</p>
                <h2>Yesterday’s progress</h2>
              </div>
            </div>

            <div className="brief-metrics">
              <div className="brief-item">
                <Clock3 size={18} />
                <div>
                  <strong>6.2h</strong>
                  <span>Focus time</span>
                </div>
              </div>

              <div className="brief-item">
                <TrendingUp size={18} />
                <div>
                  <strong>+14%</strong>
                  <span>Productivity</span>
                </div>
              </div>

              <div className="brief-item">
                <Sparkles size={18} />
                <div>
                  <strong>3 ideas</strong>
                  <span>Captured</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="daily-tip-card">
            <p className="eyebrow">Today’s recommendation</p>
            <h3>Review your React notes before the next design review.</h3>
            <p>
              A short pass across your latest memory entries will keep your context sharp and your momentum high.
            </p>
            <button type="button" className="inline-action">
              Open AI assistant
              <ArrowRight size={16} />
            </button>
          </Card>
        </section>

        <section className="actions-grid">
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <Card key={action.title} className="action-card">
                <div className="action-icon">
                  <Icon size={20} />
                </div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </Card>
            );
          })}
        </section>

        <section className="stats-grid">
          <StatCard title="Total Memories" value="248" />
          <StatCard title="Documents" value="42" />
          <StatCard title="AI Conversations" value="156" />
          <StatCard title="This Week" value="18" />
        </section>

        <section className="dashboard-panels">
          <Card className="panel-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Recent Memories</p>
                <h2>Latest captures</h2>
              </div>
            </div>

            <ul className="memory-list">
              {recentMemories.map((memory) => (
                <li key={memory.title} className="memory-item">
                  <div className="memory-content">
                    <h3>{memory.title}</h3>
                    <p>{memory.timestamp}</p>
                  </div>
                  <span className="memory-badge">{memory.category}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="panel-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">AI Insights</p>
                <h2>Suggested next steps</h2>
              </div>
            </div>

            <div className="insight-list">
              {insights.map((insight) => (
                <div key={insight.title} className="insight-card">
                  <h3>{insight.title}</h3>
                  <p>{insight.subtitle}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="dashboard-panels lower-panels">
          <Card className="panel-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Knowledge Growth</p>
                <h2>Your memory momentum</h2>
              </div>
            </div>

            <div className="growth-layout">
              <div className="growth-meter" aria-label="Growing knowledge chart">
                <div className="growth-meter__fill" />
                <div className="growth-meter__cap" />
              </div>

              <div className="growth-copy">
                <p>
                  Knowledge growth is accelerating as new ideas, documents, and notes flow into your workspace.
                </p>
                <div className="growth-points">
                  <span>72% momentum</span>
                  <span>+9 this week</span>
                  <span>3 new clusters</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="panel-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Weekly Activity</p>
                <h2>Consistency score</h2>
              </div>
            </div>

            <div className="activity-list">
              {weeklyActivity.map((activity) => (
                <div key={activity.day} className="activity-row">
                  <span className="activity-label">{activity.day}</span>
                  <div className="activity-bar">
                    <div className={`activity-bar__fill ${activity.tone}`} style={{ width: `${activity.value}%` }} />
                  </div>
                  <span className="activity-value">{activity.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}