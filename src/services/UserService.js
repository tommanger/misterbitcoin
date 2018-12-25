import StorageService from './StorageService'

export default {
    loadUser,
    signup,
    addMove,
    getMoves
}

var user;

function loadUser() {
    user = StorageService.load('user')
    return user
    // return { 
    //     name: "Ochoa Hyde", 
    //     coins: 100, 
    //     moves: [] 
    // }
}

function signup(name) {
    user = {
        name,
        coins: 100, 
        moves: []
    }
    StorageService.store('user', user)
    return user
}
function getMoves(contactId){
    return user.moves.filter(move => move._id === contactId)
}
function addMove(amount, contact) {
    const {_id, name } = contact
    user.moves.push({
        _id,
        to: name,
        at: Date.now(),
        amount
    })
    _reduceCoins(amount)
    StorageService.store('user', user)
}

function _reduceCoins(amount) {
    user.coins -= amount
    StorageService.store('user', user)
}