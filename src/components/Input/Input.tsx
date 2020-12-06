import React, {ChangeEvent, useState} from 'react';
import './Input.sass';

type OwnPropTypes = {
    placeholder: string
    filtering: (e: any) => void
    setFilter: (filteredUsers: any) => void
}

export const Input = React.memo(function (props: OwnPropTypes) {

    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.currentTarget.value.toLowerCase();
        setValue(value);
        props.filtering(value);
    };

    return (
        <>
            <div className="input-field col s12 m5 l4">
                <input type="text"
                       id={props.placeholder}
                       placeholder={props.placeholder}
                       value={value}
                       onChange={onChange}/>
            </div>
        </>
    );
});

