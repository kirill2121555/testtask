export const postReducer=(state=[],action)=>{
switch (action.type) {
    case 'ADD_POST':{
        const item=action.paylode
        return [...state,item]
    }
    default:
       return state
}
}