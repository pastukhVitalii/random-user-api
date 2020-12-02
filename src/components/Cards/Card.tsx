import React from 'react';
import {UsersType} from "../../api/api";
import 'materialize-css/dist/css/materialize.min.css'

import './card.sass';

type PropsType = {
    user: UsersType
}

export const Card = React.memo(function (props: PropsType) {

    console.log('user');
    return (
        <div className='user'>
            <div className="col s12 m6 l2 ">
                <div className="card blue-grey darken-1" >
                    <div className="card-image">
                        <img className= 'img' src={props.user.picture.medium}/>
                        <span className="card-title">{props.user.name.first}</span>
                    </div>
                    <div className="card-content white-text fixed-height">
                        <span className="card-title">
                            {`${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
})

