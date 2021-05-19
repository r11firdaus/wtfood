import React, { memo } from 'react';

const Button = props => {
    if (props.loading) return <button className="btn btn-sm btn-secondary btn-lg" disabled>Processing...</button>
    const clicked = () => {
        props.onClick();
    }

    return <button className={props.className} onClick={()=>clicked()} type={props.type}>{props.name}</button>
}

export default memo(Button);