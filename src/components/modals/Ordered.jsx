import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { cartActions } from "../../store/cartSlice";
import confirmedIcon from "./confirmedIcon";
import Backdrop from "./Backdrop";
import classes from "./ModalClasses.module.css";
import Button from "../UI/Button";

const OrderedContent = () => {
  const orderedItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onBackToHomeClick = () => {
    navigate("/homepage");
    dispatch(cartActions.emptyCart());
  };

  return (
    <div className={classes["conf-container"]}>
      {confirmedIcon}
      <h2>thank you for your order</h2>
      <p>You will receive an email confirmation shortly.</p>
      <div className={classes["ordered-item"]}>
        <div className={classes.wrap}>
          <div className={classes["item-summary"]}>
            <img src={orderedItems[0].img} alt="ordered product" />
            <div>
              <h6>{orderedItems[0].name}</h6>
              <p>{`$ ${orderedItems[0].price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
            </div>
            <p>{`x${orderedItems[0].qty}`}</p>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>{`and ${
              orderedItems.length - 1
            } other item(s)`}</p>
          </div>
        </div>
        <div className={classes["grand-total"]}>
          <h5>grand total</h5>
          <h4>{`$ ${totalPrice
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</h4>
        </div>
      </div>
      <Button onClick={onBackToHomeClick} className={classes["checkout-btn"]}>
        back to home
      </Button>
    </div>
  );
};

const Ordered = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onBackToHomeClick = () => {
    navigate("/homepage");
    dispatch(cartActions.emptyCart());
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onBackToHomeClick} />,
        document.getElementById("menu-backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OrderedContent />,
        document.getElementById("navbar-menu-root")
      )}
    </>
  );
};

export default Ordered;
