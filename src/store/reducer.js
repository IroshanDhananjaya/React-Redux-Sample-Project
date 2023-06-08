const initialState = {
    amount:100000
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
        default:
            break;
    }
    return newState
}

export default reducer;  