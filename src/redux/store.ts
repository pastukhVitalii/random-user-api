import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";
import {usersReducer} from "./user-reducer";

let rootReducer = combineReducers({
    users: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store