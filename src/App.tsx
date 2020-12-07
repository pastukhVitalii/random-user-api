import React, {useCallback, useEffect, useState} from 'react';
import './App.sass';
import {Cards} from "./components/Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {UsersType} from "./api/api";
import {setUsersTC} from "./redux/user-reducer";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";

function App() {

    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users)

    const [count, setCount] = useState(10);
    const [filteredUsers, setFilter] = useState(users);

    const filteringByName = useCallback((value: string) => {
        setFilter(users.filter(name => name.name.first.toLowerCase().includes(value)))
    }, [users]);
    const filteringByEmail = useCallback((value: string) => {
        setFilter(users.filter(name => name.email.toLowerCase().includes(value)))
    }, [users]);
    const filteringByNumber = useCallback((value: string) => {
        setFilter(users.filter(name => name.phone.toLowerCase().includes(value)))
    }, [users]);

    const dispatch = useDispatch();

    useEffect(() => {
        setFilter(users);
    }, [users]);

    useEffect(() => {
        dispatch(setUsersTC(count))
    }, [dispatch, count]);

    const arrInput = [
        {id: 1, placeholder: 'Search by name', filtering: filteringByName, setFilter: setFilter},
        {id: 2, placeholder: 'Search by email', filtering: filteringByEmail, setFilter: setFilter},
        {id: 3, placeholder: 'Search by phone number', filtering: filteringByNumber, setFilter: setFilter},
    ]

    console.log('App');
    return (
        <div className="container">
            <div className='row'>

                {arrInput.map(i => <Input key={i.id} placeholder={i.placeholder} filtering={i.filtering}
                                          setFilter={i.setFilter}/>)}
            </div>
            <Cards users={filteredUsers}/>
            <div className="row">
                <Button count={count} increment={1} setCount={setCount} title={'Add one user'}/>
                <Button count={count} increment={10} setCount={setCount} title={'Add ten user'}/>
            </div>
        </div>
    );
}

export default App;
