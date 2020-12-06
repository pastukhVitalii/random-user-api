import React from 'react';
import './Input.sass';

type OwnPropTypes = {
    value?: string
    type?: string
    placeholder: string
    onChange: (e: any) => void
}

const Input = (props: OwnPropTypes) => {
    return (
        <div className='row'>
            <div className="input-field col s3">
                <input type="text"
                       id="first_name"
                       className={props.type}
                       placeholder={props.placeholder}
                       value={props.value}
                       onChange={props.onChange}/>
            </div>

        </div>
    );
}

export default Input;
