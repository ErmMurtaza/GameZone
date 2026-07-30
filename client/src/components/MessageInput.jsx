import { Send } from "lucide-react";

export default function MessageInput({ message, setMessage, sendMessage }) {
  return (
    <div className="flex gap-3 border-t border-slate-800 p-5">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        placeholder="Type your message..."
        className="flex-1 rounded-xl bg-slate-900 px-5 py-4 outline-none"
      />

      <button
        onClick={sendMessage}
        className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700"
      >
        <Send size={20} />
      </button>
    </div>
  );
}
