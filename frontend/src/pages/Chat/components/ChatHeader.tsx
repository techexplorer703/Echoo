import { Sparkles } from 'lucide-react';

interface ChatHeaderProps {
  title: string;
  subtitle: string;
}

function ChatHeader({ title, subtitle }: ChatHeaderProps) {
  return (
    <header className="chat-header">
      <div className="chat-header__copy">
        <div className="chat-header__icon">
          <Sparkles size={18} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <button className="chat-header__action" type="button">
        New topic
      </button>
    </header>
  );
}

export default ChatHeader;
