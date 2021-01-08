import React from 'react';

const Button = props => {
    if (props.loading) {
        return <button className="btn btn-sm btn-secondary btn-lg" disabled>Processing...</button>
    }
    return (
        <button className={props.className} onClick={props.onClick} type={props.type}>{props.name}</button>
    )
}

export default Button;