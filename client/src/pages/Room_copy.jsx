import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket";

export default function Room() {
  const bottomRef = useRef(null);
  const { roomId } = useParams();

  const username = localStorage.getItem("username");

  const [users, setUsers] = useState([]);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);
useEffect(() => {

    bottomRef.current?.scrollIntoView({
        behavior: "smooth",
    });

}, [messages]);
  useEffect(() => {
    socket.emit("join-room", {
      roomId,
      name: username,
    });

    socket.on("room-users", (users) => {
      setUsers(users);
    });

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("room-users");
      socket.off("receive-message");
    };
  }, [roomId, username]);

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("send-message", {
      roomId,

      sender: username,

      message,

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Left Panel */}
      <aside className="w-72 border-r border-slate-800 p-5">
        <h2 className="text-2xl font-bold mb-6">Players</h2>

        {users.map((user) => (
          <div key={user.id} className="mb-3 rounded-lg bg-slate-900 p-3">
            {user.name}
          </div>
        ))}
      </aside>

      {/* Right Panel */}
      <div className="flex flex-col flex-1">
        <div className="border-b border-slate-800 p-5 text-2xl font-bold">
          Room {roomId}
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {messages.map((msg, index) => {
            const isMe = msg.sender === username;

            return (
              <div
                key={index}
                className={`flex mb-4 ${
                  isMe ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] ${
                    isMe ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  {!isMe && (
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold">
                        {msg.sender.charAt(0).toUpperCase()}
                      </div>

                      <span className="text-sm text-slate-300">
                        {msg.sender}
                      </span>
                    </div>
                  )}

                  <div
                    className={`px-4 py-3 rounded-2xl shadow-lg ${
                      isMe
                        ? "bg-blue-600 rounded-br-md"
                        : "bg-slate-800 rounded-bl-md"
                    }`}
                  >
                    {msg.message}
                  </div>

                  <span className="text-xs text-slate-500 mt-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
<div ref={bottomRef}></div>
        <div className="border-t border-slate-800 p-5 flex gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message..."
            className="flex-1 rounded-lg bg-slate-900 p-4 outline-none"
          />

          <button onClick={sendMessage} className="rounded-lg bg-blue-600 px-8">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
