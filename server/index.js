const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const roomRoutes = require("./routes/roomRoutes");
const initializeSocket = require("./socket/socket");

const app = express();

app.use(cors({
    origin: "https://gamezone-1-eram6.vercel.app",
}));

app.use(express.json());

app.use("/api/rooms", roomRoutes);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://gamezone-1-eram6.vercel.app",
    },
});

initializeSocket(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on ${PORT}`);
});