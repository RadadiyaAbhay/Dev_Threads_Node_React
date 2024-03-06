let initialState = {
    isLoading : false,
    err : null
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "Pro":
            return state;
            break;
    
        default:
            return state;
            break;
    }
}