import { combineReducers } from "redux";
import {userReducer} from './user.reducer'
import { postReducer } from './post.reducer'

export const rootReducer = combineReducers({
    userReducer , postReducer
})