import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center text-center py-28"
    >
      <h1 className="text-6xl font-black leading-tight">
        Play Games
        <br />
        Together.
      </h1>

      <p className="mt-6 max-w-2xl text-slate-400 text-lg">
        Create rooms instantly and enjoy multiplayer games
        with friends in real time.
      </p>

      <div className="flex gap-4 mt-10">
        <Button to="/create-room">
            Create Room
        </Button>

        <Button
            to="/join-room"
            variant="secondary"
        >
            Join Room
        </Button>
      </div>
    </motion.section>
  );
}