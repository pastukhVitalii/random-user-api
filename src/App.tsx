import React, {useEffect} from 'react';
import './App.sass';
import {Cards} from "./components/Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {UsersType} from "./api/api";
import {setUsersTC} from "./redux/user-reducer";

function App() {

    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUsersTC())
    }, [dispatch]);
    console.log(users);

    return (
        <div className="container">
            <Cards users={users}/>
        </div>
    );
}

export default App;
