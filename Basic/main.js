let Creep = require('loop.creep');
let Room = require('loop.room');
let Spawn = require('loop.spawn');

function clearMemory() {
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clear Memory:' + name);
        }
    }
}

module.exports.loop = function () {
    console.log("/////////////////////////////////////////");
    try {

        // ROOM LOOP
        for (const roomName in Game.rooms) {
            let room = Game.rooms[roomName];
            Room.run(room);
            console.log("Loop room: " + roomName);
        }

        // SPAWN LOOP
        for (const spawnName in Game.spawns) {
            let spawn = Game.spawns[spawnName];
            Spawn.run(spawn);
            console.log("Loop spawn: " + spawnName);
        }

        // CREEP LOOP
        for (const creepName in Game.creeps) {
            let creep = Game.creeps[creepName];
            Creep.run(creep);
            console.log("Loop creep: " + creepName);
        }

        clearMemory()
    } catch (error) {
        console.log(error);
    }
    Game.cpu.generatePixel();
}

