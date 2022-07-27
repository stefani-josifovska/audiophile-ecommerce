import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/";
import { menuActions } from "../../store/menuSlice";
import { cartActions } from "../../store/cartSlice";
import { hamburgerIcon, companyLogo, CartIcon } from "./icons";
import MenuModal from "../modals/MenuModal";
import Cart from "../modals/Cart";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartQty = useSelector((state) => state.cart.cartItems.length);

  const onMenuClickHandler = () => {
    dispatch(menuActions.toggleMenu());
    if (!isMenuOpen) {
      window.scrollTo(0, 0);
    }
    dispatch(cartActions.closeCart());
  };

  const onCartClickHandler = () => {
    dispatch(cartActions.toggleCart());
    dispatch(menuActions.closeMenu());
  };

  return (
    <>
      <div className={classes.container}>
        <div onClick={onMenuClickHandler}>{hamburgerIcon}</div>
        <Link to="/homepage">
          <div>{companyLogo}</div>
        </Link>
        <div className={classes.cart} onClick={onCartClickHandler}>
          {CartIcon}
          {cartQty > 0 && <div>{cartQty}</div>}
        </div>
      </div>
      {isMenuOpen && <MenuModal />}
      {isCartOpen && <Cart />}
    </>
  );
};

export default Navbar;
