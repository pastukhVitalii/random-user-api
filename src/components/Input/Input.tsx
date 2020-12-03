import React from 'react';
import './Input.sass';

type OwnPropTypes = {
    value: string
    type: string
    placeholder: string
    onChange: (e: any) => void
}

const Input = (props: OwnPropTypes) => {
    // let errorClass = this.props.state.error ? 'error' : '';
    return (
      <div className='input'>
        <input type="text" placeholder= {props.placeholder}
               className={props.type}
               value={props.value}
               onChange={props.onChange}
               autoFocus={true}/>
      </div>
    );
}

export default Input;
