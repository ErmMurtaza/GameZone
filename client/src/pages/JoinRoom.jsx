import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinRoom() {
    const [name, setName] = useState("");
    const [roomId, setRoomId] = useState("");

    const navigate = useNavigate();

    const joinRoom = () => {

        if (!name || !roomId) {
            return alert("Please fill all fields");
        }

        localStorage.setItem("username", name);

        navigate(`/room/${roomId.toUpperCase()}`);
    };

    return (
        <div className="flex flex-col gap-4 max-w-md mx-auto pt-24">

            <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-slate-700 bg-slate-900 p-4 rounded-xl"
            />

            <input
                placeholder="Room Code"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="border border-slate-700 bg-slate-900 p-4 rounded-xl"
            />

            <button
                onClick={joinRoom}
                className="bg-blue-600 rounded-xl p-4"
            >
                Join Room
            </button>

        </div>
    );
}