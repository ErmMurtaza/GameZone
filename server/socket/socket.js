const rooms = require("../memory/roomStore");

function initializeSocket(io) {
  io.on("connection", (socket) => {
    // console.log(`User Connected: ${socket.id}`);
    // on joining room
    socket.on("join-room", ({ roomId, name }) => {
      socket.join(roomId);

      if (!rooms[roomId]) {
        rooms[roomId] = {
          roomId,
          host: null,
          users: [],
        };
      }

      // Prevent duplicate entries for this socket
      rooms[roomId].users = rooms[roomId].users.filter(
        (user) => user.id !== socket.id,
      );

      // Add the new user
      rooms[roomId].users.push({
        id: socket.id,
        name,
      });

      io.to(roomId).emit("room-users", rooms[roomId].users);

      console.dir(rooms, { depth: null });
    });
    // on sending message
    socket.on("send-message", (data) => {
      // console.log("Message received:", data);

      io.to(data.roomId).emit("receive-message", data);
    });
    // on disconnect
    socket.on("disconnect", () => {
      // console.log(`Disconnected: ${socket.id}`);

      for (const roomId in rooms) {
        rooms[roomId].users = rooms[roomId].users.filter(
          (user) => user.id !== socket.id,
        );

        io.to(roomId).emit("room-users", rooms[roomId].users);

        if (rooms[roomId].users.length === 0) {
          delete rooms[roomId];
        }
      }
    });
  });
}

module.exports = initializeSocket;
