import React from 'react';
import './Button.sass';

type OwnPropTypes = {
    count: number
    increment: number
    setCount: (value: number) => void
    title: string
}

export const Button = React.memo(function (props: OwnPropTypes) {

    const onClick = () => {
        props.setCount(props.count + props.increment);
    };
    console.log('Button');
    return (
        <>
            <button className='waves-effect waves-light btn my_Style_Btn' onClick={onClick}>
                {props.title}
            </button>
        </>
    );
})
