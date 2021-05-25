export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id}]}
        case 'REMOVE_FRIEND':
            const index = state.friends.indexOf(state.friends.find(f => f.id === action.id))
            const friends = [...state.friends]
            friends.splice(index,1)
            return {friends: friends}
        default:
            return state;
    }
}
