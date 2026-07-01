import { MessageSquareText, Plus, Search } from 'lucide-react';

export interface ConversationItem {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  unread?: boolean;
}

interface ChatSidebarProps {
  conversations: ConversationItem[];
  activeConversationId: string;
}

function ChatSidebar({ conversations, activeConversationId }: ChatSidebarProps) {
  return (
    <div className="chat-sidebar">
      <div className="chat-sidebar__header">
        <div>
          <p className="chat-sidebar__eyebrow">Workspace</p>
          <h2>Conversations</h2>
        </div>
        <button className="chat-sidebar__button" type="button" aria-label="New conversation">
          <Plus size={18} />
        </button>
      </div>

      <label className="chat-sidebar__search" htmlFor="chat-search">
        <Search size={16} />
        <input id="chat-search" type="search" placeholder="Search chats" />
      </label>

      <div className="chat-sidebar__list" role="list">
        {conversations.map((conversation) => {
          const isActive = conversation.id === activeConversationId;

          return (
            <button
              key={conversation.id}
              className={`chat-sidebar__item ${isActive ? 'is-active' : ''}`}
              type="button"
            >
              <div className="chat-sidebar__icon">
                <MessageSquareText size={18} />
              </div>
              <div className="chat-sidebar__content">
                <div className="chat-sidebar__meta">
                  <strong>{conversation.title}</strong>
                  <span>{conversation.timestamp}</span>
                </div>
                <p>{conversation.preview}</p>
              </div>
              {conversation.unread ? <span className="chat-sidebar__badge" /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ChatSidebar;
