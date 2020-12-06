import {ResUsersType, usersApi, UsersType} from "../api/api";
import {Dispatch} from "redux";

const initialState: ResUsersType = {
    users: [],
}

export const usersReducer = (state: ResUsersType = initialState, action: ActionsType): ResUsersType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

// actions

export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const);

// thunk
export const setUsersTC = (count: number) => {
    return (dispatch: ThunkDispatch) => {
        usersApi.getUsers(count)
            .then((res) => {
                dispatch(setUsersAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

// types

export type SetUsersActionType = ReturnType<typeof setUsersAC>;
type ActionsType = SetUsersActionType;

type ThunkDispatch = Dispatch<ActionsType>;
