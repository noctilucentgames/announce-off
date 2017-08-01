module.exports = function announceOff(dispatch){
    dispatch.hook('S_ANNOUNCE_MESSAGE', 1, event => {
        if (event.msg == 3433)return false
    })
}