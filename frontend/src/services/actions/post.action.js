import { api } from "../../utils/api"
import { ADDPOSTREJ, ADDPOSTREQ, ADDPOSTRES, GETPOSTREJ, GETPOSTREQ, GETPOSTRES } from "../const"

export const addPostReq = () => {
    return {
        type: ADDPOSTREQ,
    }
}

export const addPostRej = (data) => {
    return {
        type: ADDPOSTREJ,
        payload: data
    }
}
export const addPostRes = () => {
    return {
        type: ADDPOSTRES
    }
}

export const addPost = (data) => {
    return dispatch => {
        dispatch(addPostReq())
        api.post(`posts/create`, data)
            .then((res) => {
                dispatch(addPostRes());
                dispatch(getPost())
            }).catch((err) => {
                dispatch(addPostRej(err));
            })
    };
}

export const getPostReq = () => {
    return {
        type: GETPOSTREQ,
    }
}

export const getPostRej = (data) => {
    return {
        type: GETPOSTREJ,
        payload: data
    }
}
export const getPostRes = (data) => {
    return {
        type: GETPOSTRES,
        payload : data
    }
}

export const getPost = ( ) => {
    return dispatch => {
        dispatch(getPostRes())
        api.get(`posts/all`)
            .then((res) => {
                dispatch(getPostRes(res.data.posts));
            }).catch((err) => {
                dispatch(getPostRej(err));
            })
    };
}