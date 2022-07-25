import React from "react";
import ReactDOM from "react-dom";
import ProductsDisplay from "../allPagesFooter/ProductsDisplay";
import Backdrop from "./Backdrop";
import classes from './ModalClasses.module.css';

const OpenedMenu = () => {
  return (
    <section >
      <ProductsDisplay className={classes['open-menu']} />
    </section>
  );
};

const MenuModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("menu-backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OpenedMenu />,
        document.getElementById("navbar-menu-root")
      )}
    </>
  );
};

export default MenuModal;
