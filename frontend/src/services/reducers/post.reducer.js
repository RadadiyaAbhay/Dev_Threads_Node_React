import { ADDPOSTREJ, ADDPOSTREQ, ADDPOSTRES, GETPOSTREJ, GETPOSTREQ, GETPOSTRES } from "../const";

let initialState = {
    isLoading: false,
    posts: [],
    post: null,
    err: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOSTREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            };
        case ADDPOSTRES:
            return {
                ...state,
                isLoading: false,
                err: null
            }
        case ADDPOSTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload,
            };
        case GETPOSTREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            };
        case GETPOSTRES:
            return {
                ...state,
                isLoading: false,
                err: null,
                posts : action.payload
            }
        case GETPOSTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload,
            };

        default:
            return state;
    }
}
