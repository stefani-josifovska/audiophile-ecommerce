import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
    return <button className={`${classes.btn} ${props.className}`} style={props.style} onClick={props.onClick} >{props.children}</button>
};

export default Button;