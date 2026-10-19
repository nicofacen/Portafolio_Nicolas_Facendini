import ChatHeader from "./ChatHeader.jsx";
import ChatMessages from "./ChatMessages.jsx";
import ChatQuickReplies from "./ChatQuickReplies.jsx";

export default function ChatWindow({ messages, isTyping, ask, messagesEndRef, onClose }) {
  return (
    <div className="flex h-[580px] max-h-[calc(100vh-8rem)] w-80 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/5 bg-main shadow-2xl">
      <ChatHeader onClose={onClose} />
      <ChatMessages messages={messages} isTyping={isTyping} messagesEndRef={messagesEndRef} />
      <ChatQuickReplies onSelect={ask} disabled={isTyping} />
    </div>
  );
}
