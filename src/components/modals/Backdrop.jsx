import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "../../store/cartSlice";
import { menuActions } from "../../store/menuSlice";
import classes from "./ModalClasses.module.css";

const Backdrop = ({onClick}) => {
  const dispatch = useDispatch();
  const onCloseHandler = () => {
    dispatch(menuActions.closeMenu());
    dispatch(cartActions.closeCart());
  };

  return <div className={classes.backdrop} onClick={onClick || onCloseHandler} />;
};

export default Backdrop;
