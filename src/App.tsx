import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.sass';
import {Cards} from "./components/Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {UsersType} from "./api/api";
import {setUsersTC} from "./redux/user-reducer";
import Input from "./components/Input/Input";

function App() {

    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUsersTC())
    }, [dispatch]);
    console.log(users);
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, filteredUsers?: any) => {
        const value = event.currentTarget.value;
        setValue(value)
    }

    const filtering = () => {
        /*return users.filter(i => {
            for (let char of i.name.first) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                if (char === value) return true
            }
        });*/
        return users.filter(name => name.name.first.includes(value));
    }

    return (
        <div className="container">
            <Input placeholder={'Search by name'} onChange={onChange}/>
            <Cards users={filtering()}/>
        </div>
    );
}

export default App;
