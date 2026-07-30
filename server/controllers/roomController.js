const rooms = require("../memory/roomStore");
const generateRoomCode = require("../utils/roomCode");

exports.createRoom = (req, res) => {

    const { name } = req.body;
    let roomId;
    
    do {
        roomId = generateRoomCode();
    } while (rooms[roomId]);
    rooms[roomId] = {
        roomId,
        host: null,
        users: []
    };
    res.json({
        success: true,
        roomId
    });
};