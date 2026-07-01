import { SendHorizontal } from 'lucide-react';

interface ChatInputProps {
  placeholder?: string;
}

function ChatInput({ placeholder = 'Ask about your notes, plans, or summaries…' }: ChatInputProps) {
  return (
    <form className="chat-input" onSubmit={(event) => event.preventDefault()}>
      <label className="chat-input__field" htmlFor="chat-message">
        <textarea
          id="chat-message"
          rows={1}
          placeholder={placeholder}
          aria-label="Message input"
        />
      </label>
      <button className="chat-input__button" type="submit" aria-label="Send message">
        <SendHorizontal size={18} />
      </button>
    </form>
  );
}

export default ChatInput;
