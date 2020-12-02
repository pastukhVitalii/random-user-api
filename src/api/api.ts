import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://randomuser.me/api/?inc=gender,name,nat,id,phone',
    // ...settings
})

// api
export const usersApi = {
    getUsers() {
        const promise = instance.get<ResponseType>(`&page=3&results=10`);
        return promise;
    },
}

// types
export type ResponseType = {
    results: Array<UsersType>
}

export type ResUsersType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: IdType
    gender: string
    name: NameType
    phone: string
    nat: string
}

type NameType = {
    title: string
    first: string
    last: string
}

type IdType = {
    name: string
    value: string
}