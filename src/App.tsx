import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.sass';
import {Cards} from "./components/Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {UsersType} from "./api/api";
import {setUsersTC} from "./redux/user-reducer";
import Input from "./components/Input/Input";
import {Button} from "./components/Button/Button";

function App() {

    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users)

    const [count, setCount] = useState(10);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUsersTC(count))
    }, [dispatch, count]);
    console.log(users);
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setValue(value);
    }

    const filtering = () => {
        /*return users.filter(i => {
            for (let char of i.name.first) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                if (char === value) return true
            }
        });*/
        const filteredUsers = users.filter(name => name.name.first.includes(value));
        console.log(filteredUsers);
        return filteredUsers;
    }

    return (
        <div className="container">
            <Input placeholder={'Search by name'} onChange={onChange}/>
            {filtering().length ? <Cards users={filtering()}/> : <div>No items</div>}
            <div className="row">
                <Button count={count} increment={1} setCount={setCount} title={'Add one user'}/>
                <Button count={count} increment={10} setCount={setCount} title={'Add ten user'}/>
            </div>
        </div>
    );
}

export default App;
