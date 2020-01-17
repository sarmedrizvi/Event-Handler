import React from 'react';
import './Button.scss'


export const CustomButton=({children,isGoogleButton,OnClick,...otherProps})=>(

    <button
    className={`${isGoogleButton? 'GoogleButton' : ''} inputButton` }
    {...otherProps}
    onClick={OnClick}
    >
    {children}
    </button>
)