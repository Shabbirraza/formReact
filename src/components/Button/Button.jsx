import React from 'react'
// import { MdMessage } from 'react-icons/Md';
import Styles from './Button.module.css'

const Button = ({icon , text , outline_Btn, ...rest}) => {
    // console.log(...rest)
    return (

        <button {...rest} className={outline_Btn ? Styles.outline_btn :  Styles.primaryButton}>
            
            {icon}
            {text}
        </button>
    )
}

export default Button