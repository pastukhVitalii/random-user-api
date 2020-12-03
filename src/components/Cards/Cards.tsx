import React from 'react';
import {UsersType} from "../../api/api";
import {Card} from "./Card";

type PropsType = {
    users: Array<UsersType>
}

export const Cards = React.memo(function (props: PropsType) {

    return (
        <>
            <div className='row'>
                {props.users.map(u => {
                    return <Card key={u.name.first} user={u}/>
                })}
            </div>
        </>
    );
})

