import React from "react";
import classes from "./Button.module.css";

const Button = ({className, style, onClick, type, form, children}) => {
  return (
    <button
      className={`${classes.btn} ${className}`}
      style={style}
      onClick={onClick}
      type={type || "button"}
      form={form}
    >
      {children}
    </button>
  );
};

export default Button;
