import { GETPROFILEREJ, GETPROFILEREQ, GETPROFILERES, LOGINREJ, LOGINREQ, REGISTERREJ, REGISTERREQ, REGISTERRES, SIGNOUTRES } from "../const";

let initialState = {
    isLoading: false,
    isLogin: false,
    isSignup: false,
    user: null,
    err: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGINREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            };

        case LOGINREJ:
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                err: action.payload,
                user: null
            };
        case REGISTERREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            };
        case REGISTERRES:
            return {
                ...state,
                isLoading: false,
                isSignup: true,
            };
        case REGISTERREJ:
            return {
                ...state,
                isLoading: false,
                isSignup: false,
                err: action.payload,
                user: null
            };
        case GETPROFILEREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            };
        case GETPROFILERES:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                err: null,
                user: action.payload
            };

        case SIGNOUTRES:
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                err: null,
            };

        case GETPROFILEREJ:
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                err: action.payload,
                user: null
            };
        default:
            return state;
    }
}