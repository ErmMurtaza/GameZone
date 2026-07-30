import { useState } from "react";
import api from "../services/api";
import socket from "../socket";
import { useNavigate } from "react-router-dom";

export default function CreateRoom() {
    const navigate = useNavigate();
    const [name,setName] = useState("");

    const createRoom = async () => {
    const response = await api.post("/api/rooms", {
        name,
    });

    socket.emit("join-room", {
        roomId: response.data.roomId,
        name,
    });

    localStorage.setItem("username", name);

    navigate(`/room/${response.data.roomId}`);
};

    return(
        <div className="flex flex-col gap-4 max-w-md mx-auto pt-24">
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your name"
                className="border border-slate-700 bg-slate-900 p-4 rounded-xl"
            />

            <button
                onClick={createRoom}
                className="bg-blue-600 rounded-xl p-4"
            >
                Create Room
            </button>
        </div>
    );
}