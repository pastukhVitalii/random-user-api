
import {ResUsersType, usersApi, UsersType} from "../api/api";
import {Dispatch} from "redux";

const initialState: ResUsersType = {
    users: []
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

export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const)

// thunks
/*export const setEpisodesTC = () => {
    return (dispatch: ThunkDispatch) => {
        episodeApi.getEpisodes()
            .then((res) => {
                dispatch(setEpisodesAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

export const setFilteredEpisodesTC = (e: string) => {
    return (dispatch: ThunkDispatch) => {
        episodeApi.getFilteredEpisodes(e)
            .then((res) => {
                dispatch(setEpisodesAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}*/
export const setUsersTC = () => {
    return (dispatch: ThunkDispatch) => {
        usersApi.getUsers()
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
type ActionsType = SetUsersActionType

type ThunkDispatch = Dispatch<ActionsType>
