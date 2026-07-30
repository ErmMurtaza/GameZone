export default function MessageBubble({ msg, username }) {
  const isMine = msg.sender === username;

  return (
    <div className={`mb-5 flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[70%]">
        {!isMine && (
          <div className="mb-1 text-sm text-slate-400">{msg.sender}</div>
        )}

        <div
          className={`
                        rounded-2xl px-5 py-3 shadow-lg
                        ${
                          isMine
                            ? "rounded-br-md bg-blue-600"
                            : "rounded-bl-md bg-slate-800"
                        }
                    `}
        >
          {msg.message}
        </div>

        <div
          className={`mt-1 text-xs text-slate-500 ${
            isMine ? "text-right" : ""
          }`}
        >
          {msg.time}
        </div>
      </div>
    </div>
  );
}
