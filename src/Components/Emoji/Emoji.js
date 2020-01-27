import React from 'react';
import './Emoji.scss'
export const Emoji = ({label,symbol,...otherProps}) => (
    <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
        {...otherProps}
    >
        {symbol}
    </span>
);