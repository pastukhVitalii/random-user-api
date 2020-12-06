import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://randomuser.me/api/?seed=foobar',
    // ...settings
})

// api
export const usersApi = {
    getUsers(count: number) {
        const promise = instance.get<ResponseType>(`&results=${count}`);
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
    picture: PictureType
    email: string
    location: LocationType
    // timezone: TimezoneType
    login: LoginType
}

type LoginType = {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

/*type TimezoneType = {
    offset: string,
    description: string
}*/

type LocationType = {
    street: {number: string, name: string}
    city: string
    state: string
    postcode: string
}

type PictureType = {
    large: string
    medium: string
    thumbnail: string
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