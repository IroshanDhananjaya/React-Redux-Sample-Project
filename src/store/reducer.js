const initialState = {
    amount:100000,
    name:"Iroshan",
    age:0
}

const reducer = (state = initialState , action) => {
    const newState = {...state};

    switch(action.type){
        case "INCREMENT":
            newState.amount += action.value;
            break;
        case "DECREMENT":
            newState.amount -= action.value;
            break;
            case "Name":
                newState.name = action.value
                newState.age = action.age
        default:
            break;
    }
    return newState
}

export default reducer;  