import { Copy } from "lucide-react";

export default function RoomHeader({ roomId }) {
  const copyCode = () => {
    navigator.clipboard.writeText(roomId);
    alert("Room code copied!");
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">🎮 ChatRoom</h1>

        <p className="text-sm text-slate-400">Room {roomId}</p>
      </div>

      <button
        onClick={copyCode}
        className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
      >
        <Copy size={18} />

        {roomId}
      </button>
    </div>
  );
}
