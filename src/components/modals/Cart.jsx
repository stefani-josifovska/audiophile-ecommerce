import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";
import Button from "../UI/Button";
import Backdrop from "./Backdrop";
import classes from "./ModalClasses.module.css";

const CartContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) =>
    state.cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const onEmptyCartHandler = () => {
    dispatch(cartActions.emptyCart());
  };

  const onDecreaseQtyHandler = (e) => {
    const id = e.target.parentNode.id;
    dispatch(cartActions.changeQty({ action: "DECREASE", id: id }));
  };

  const onIncreaseQtyHandler = (e) => {
    const id = e.target.parentNode.id;
    dispatch(cartActions.changeQty({ action: "INCREASE", id: id }));
  };

  const onCheckoutClickHandler = () => {
    dispatch(cartActions.closeCart());
  };

  return (
    <div className={classes["cart-container"]}>
      <div className={classes["cart-first"]}>
        <h3>{`cart (${cartItems.length})`}</h3>
        {cartItems.length > 0 && (
          <button className={classes.remove} onClick={onEmptyCartHandler}>
            Remove all
          </button>
        )}
      </div>
      {cartItems.length > 0 ? (
        <div>
          <div className={classes["cart-content"]}>
            {cartItems.map((item) => {
              return (
                <div className={classes["cart-item"]} key={item.id}>
                  <div className={classes['img-name']}>
                    <img src={item.img} alt="" />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{`$ ${item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
                    </div>
                  </div>
                  <div className={classes.qty} id={item.id}>
                    <button onClick={onDecreaseQtyHandler}>-</button>
                    <h6>{item.qty}</h6>
                    <button onClick={onIncreaseQtyHandler}>+</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes["total-price"]}>
            <p>total</p>
            <h3>{`$ ${totalPrice}`}</h3>
          </div>
          <Link to="/checkout">
            <Button
              className={classes["cart-btn"]}
              style={{ width: "100%" }}
              onClick={onCheckoutClickHandler}
            >
              Checkout
            </Button>
          </Link>
        </div>
      ) : (
        <h5>Your cart is empty</h5>
      )}
    </div>
  );
};

const Cart = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("menu-backdrop-root")
      )}
      {ReactDOM.createPortal(
        <CartContent />,
        document.getElementById("navbar-menu-root")
      )}
    </>
  );
};

export default Cart;
