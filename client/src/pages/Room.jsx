import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket";

import RoomHeader from "../components/RoomHeader";
import PlayerList from "../components/PlayerList";
import ChatBox from "../components/ChatBox";
import MessageInput from "../components/MessageInput";

export default function Room() {
  const { roomId } = useParams();

  const username = localStorage.getItem("username");

  const bottomRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("join-room", {
      roomId,
      name: username,
    });

    socket.on("room-users", setUsers);

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("room-users");
      socket.off("receive-message");
    };
  }, [roomId, username]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

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
    <div className="h-screen bg-slate-950 text-white flex flex-col">
      <RoomHeader roomId={roomId} />

      <div className="flex flex-1 overflow-hidden">
        <PlayerList users={users} username={username}/>

        <div className="flex flex-col flex-1">
          <ChatBox messages={messages} username={username} bottomRef={bottomRef}/>
          <MessageInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}
