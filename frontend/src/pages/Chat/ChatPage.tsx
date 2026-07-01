import ChatHeader from './components/ChatHeader';
import ChatInput from './components/ChatInput';
import ChatSidebar, { type ConversationItem } from './components/ChatSidebar';
import MessageBubble from './components/MessageBubble';
import './ChatPage.css';

const conversations: ConversationItem[] = [
  {
    id: '1',
    title: 'Weekly reflection',
    preview: 'Summarize the key risks we discussed and map them to next week.',
    timestamp: '10:24',
    unread: true,
  },
  {
    id: '2',
    title: 'Product strategy',
    preview: 'Turn this backlog into a focused release plan with priorities.',
    timestamp: '08:11',
  },
  {
    id: '3',
    title: 'Research notes',
    preview: 'Pull the key insights from the latest customer interviews.',
    timestamp: 'Yesterday',
  },
];

const messages = [
  {
    id: 'm1',
    role: 'assistant' as const,
    content:
      'I’ve pulled together your recent context and can help you refine product strategy, synthesize notes, or draft a crisp response.',
    timestamp: '10:24',
  },
  {
    id: 'm2',
    role: 'user' as const,
    content: 'Show me the strongest opportunities in the current roadmap and how to frame them for leadership.',
    timestamp: '10:25',
  },
  {
    id: 'm3',
    role: 'assistant' as const,
    content:
      'The best angle is to anchor the update around customer impact, delivery confidence, and three clear next bets for the next sprint.',
    timestamp: '10:26',
  },
];

function ChatPage() {
  return (
    <div className="chat-page">
      <aside className="chat-sidebar-panel">
        <ChatSidebar conversations={conversations} activeConversationId="1" />
      </aside>

      <section className="chat-main">
        <ChatHeader title="Echo AI" subtitle="Research assistant • online" />

        <div className="chat-messages">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
        </div>

        <ChatInput />
      </section>
    </div>
  );
}

export default ChatPage;