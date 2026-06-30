import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";

import Sidebar from "../../components/layout/Sidebar";
import StatCard from "../../components/dashboard/cards/StatCard";
import MemoryCard from "../../components/vault/cards/MemoryCard";
import type { MemoryItem } from "../../types/vault";
import "./VaultPage.css";

const filterOptions = ["All", "Notes", "Documents", "Ideas", "Meetings"] as const;
type FilterOption = (typeof filterOptions)[number];

const memoryItems: MemoryItem[] = [
  {
    id: "vault-1",
    title: "Q2 product launch plan",
    description:
      "Organize launch goals, research notes, and AI-generated feature priorities for the next quarter.",
    tags: ["Launch", "Product", "AI"],
    createdAt: "Apr 12, 2026",
    updatedAt: "2 hours ago",
    source: "Meeting Notes",
    category: "Meetings",
    isFavorite: true,
  },
  {
    id: "vault-2",
    title: "AI content strategy brief",
    description:
      "Save article outlines, keyword research, and writing prompts for the Echooo blog.",
    tags: ["Content", "Strategy", "Notes"],
    createdAt: "Apr 9, 2026",
    updatedAt: "Yesterday",
    source: "Notebook",
    category: "Notes",
  },
  {
    id: "vault-3",
    title: "Research summary: user onboarding",
    description:
      "Captured user interviews, flows, and recommended improvements for the onboarding funnel.",
    tags: ["Research", "UX", "Growth"],
    createdAt: "Apr 6, 2026",
    updatedAt: "3 days ago",
    source: "PDF Upload",
    category: "Documents",
  },
  {
    id: "vault-4",
    title: "Weekly AI retrospectives",
    description:
      "A reference for recent AI responses, insights, and follow-up tasks from team conversations.",
    tags: ["AI", "Retrospective", "Memory"],
    createdAt: "Apr 2, 2026",
    updatedAt: "5 days ago",
    source: "Chat Log",
    category: "Ideas",
  },
];

export default function VaultPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMemories = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return memoryItems.filter((memory) => {
      const matchesFilter = activeFilter === "All" || memory.category === activeFilter;
      const searchableText = `${memory.title} ${memory.description} ${memory.tags.join(" ")} ${memory.source}`.toLowerCase();
      const matchesSearch = query.length === 0 || searchableText.includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="content">
        <div className="vault-topbar">
          <div>
            <p className="eyebrow">Memory Vault</p>
            <h1 className="vault-heading">Build your second brain</h1>
            <p className="vault-description">
              Save notes, PDFs, and AI memory records in one searchable workspace.
            </p>
          </div>

          <button className="primary-btn" type="button">
            <Plus size={16} />
            Add Memory
          </button>
        </div>

        <div className="stats-grid">
          <StatCard title="Saved Memories" value="248" />
          <StatCard title="Active Notes" value="82" />
          <StatCard title="Uploaded PDFs" value="14" />
          <StatCard title="Recent AI Chats" value="27" />
        </div>

        <div className="vault-actions">
          <div className="vault-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search memories, notes, PDFs..."
              aria-label="Search memories"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="vault-filter">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredMemories.length > 0 ? (
          <div className="vault-grid">
            {filteredMemories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        ) : (
          <div className="vault-empty">
            <h3>No memories found</h3>
            <p>Try another keyword or switch to a different filter.</p>
          </div>
        )}
      </main>
    </div>
  );
}
