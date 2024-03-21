import { GETPROFILEREJ, GETPROFILEREQ, GETPROFILERES, LOGINREJ, LOGINREQ,  REGISTERREJ,  REGISTERREQ,  REGISTERRES,  SIGNOUTRES } from "../const"
import { api } from "../../utils/api"


export const loginReq = () => {
    return {
        type: LOGINREQ,
    }
}

export const loginRej = (data) => {
    return {
        type: LOGINREJ,
        payload: data
    }
}

export const loginUser = (data) => {
    return dispatch => {
        dispatch(loginReq())
        api.post(`/users/login`, data)
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                dispatch(getProfile(res.data.token));
            }).catch((err) => {
                dispatch(loginRej(err));
            })
    };
}
export const registerReq = () => {
    return {
        type: REGISTERREQ,
    }
}

export const registerRej = (data) => {
    return {
        type: REGISTERREJ,
        payload: data
    }
}
export const registerRes = () => {
    return {
        type: REGISTERRES
    }
}

export const registerUser = (data) => {
    return dispatch => {
        dispatch(registerReq())
        api.post(`users/create`, data)
            .then((res) => {
                console.log("new user");
                dispatch(registerRes());
                dispatch(loginUser(data))
            }).catch((err) => {
                dispatch(registerRej(err));
            })
    };
}
export const getProfileReq = () => {
    return {
        type: GETPROFILEREQ,
    }
}

export const getProfileRes = (data) => {
    return {
        type: GETPROFILERES,
        payload: data
    }
}
export const getProfileRej = (data) => {
    return {
        type: GETPROFILEREJ,
        payload: data
    }
}

export const getProfile = (data) => {
    api.defaults.headers.common["Authorization"] = "Bearer " + data;
    return dispatch => {
        dispatch(getProfileReq())
        api.get(`/users/profile`)
            .then((res) => {
                dispatch(getProfileRes(res.data.user));
            }).catch((err) => {
                dispatch(getProfileRej(err));
            })
    };
}

export const signOutRes = (data) => {
    return {
        type: SIGNOUTRES,
    }
}


export const signOut = () => {
    return dispatch => {
        dispatch(signOutRes());
    };
}