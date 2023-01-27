let Spawn={
    run: function (spawn) {
        spawn.spawnCreep([WORK,WORK,CARRY,MOVE], Game.time, {memory: {role: 'WORKER'}});
    }
}

module.exports = Spawn;