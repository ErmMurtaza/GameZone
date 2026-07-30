import { Gamepad2 } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center gap-2">
        <Gamepad2 size={32} />
        <h1 className="text-2xl font-bold">Game Zone</h1>
      </div>

      <div className="hidden md:flex gap-8 text-slate-300">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/create-room">Create Room</NavLink>

        <NavLink to="/join-room">Join Room</NavLink>
      </div>
    </nav>
  );
}
