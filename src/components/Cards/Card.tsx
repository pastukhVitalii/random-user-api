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
            <div className="col s12 m6 l4 xl4">
                <div className="card blue-grey darken-1 card_style">
                    <div className="card-image">
                        <img className='img' src={props.user.picture.large} alt={'user'}/>
                    </div>
                    <div className="white-text card_description">
                        <div className="text_shadow">{props.user.name.first} {props.user.name.last}</div>
                        <div className='contend_text'>{props.user.email}</div>
                        <div>{props.user.phone}</div>
                    </div>
                    <div className='blue-grey darken-1 white-text card_details card_description'>
                        <div className="text_shadow">{props.user.name.first} {props.user.name.last}</div>
                        <div className='contend_text'>{props.user.email}</div>
                        <div>{props.user.phone}</div>
                        <div>gender: {props.user.gender}</div>
                        <div>nationality: {props.user.nat}</div>
                        <div>city: {props.user.location.city}</div>
                        <div>street: {props.user.location.street.name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
})

