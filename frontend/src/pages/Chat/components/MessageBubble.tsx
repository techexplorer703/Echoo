interface MessageBubbleProps {
  role: 'assistant' | 'user';
  content: string;
  timestamp: string;
}

function MessageBubble({ role, content, timestamp }: MessageBubbleProps) {
  const isUser = role === 'user';

  return (
    <article className={`message-bubble ${isUser ? 'message-bubble--user' : 'message-bubble--assistant'}`}>
      <div className="message-bubble__meta">
        <span>{isUser ? 'You' : 'Echo AI'}</span>
        <time>{timestamp}</time>
      </div>
      <p>{content}</p>
    </article>
  );
}

export default MessageBubble;
