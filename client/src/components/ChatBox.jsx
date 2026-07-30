import MessageBubble from "./MessageBubble";

export default function ChatBox({ messages, username, bottomRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {messages.map((msg, index) => (
        <MessageBubble key={index} msg={msg} username={username} />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}
