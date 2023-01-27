let Room = {
    run: function (room) {
        if(!room.memory.sources){
            setSources(room);
        }
    }
}

function setSources(room) {
    // CLEAR LIST
    room.memory.sources = [];
    const targets = room.find(FIND_SOURCES)
    for (let i = 0; i < targets.length; i++) {
        room.memory.sources.push(targets[i].id);
    }
}

module.exports = Room;