import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();

  const onBackClick = (e) => {
    e.preventDefault();
    navigate(-1, { replace: true });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={classes.container}>
      <button className={classes["back-btn"]} onClick={onBackClick}>
        Go Back
      </button>
      <form action="">
        <h1>checkout</h1>
        <h3>billing details</h3>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Alexei Ward" />
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" placeholder="alexei@mail.com" />
        <label htmlFor="nmb">Phone Number</label>
        <input type="number" name="nmb" placeholder="+1 202-555-0136" />
        <h3>shipping info</h3>
        <label htmlFor="address">Your Address</label>
        <input type="text" name="address" placeholder="1137 Williams Avenue" />
        <label htmlFor="zip">ZIP Code</label>
        <input type="number" name="zip" placeholder="10001" />
        <label htmlFor="city">City</label>
        <input type="text" name="city" placeholder="New York" />
        <label htmlFor="country">Country</label>
        <input type="text" name="country" placeholder="United States" />
        <h3>payment details</h3>
        <label htmlFor="method">Payment Method</label>
        <input type="radio" value="emoney" name="method" /> e-Money
        <input type="radio" value="cash" name="method" /> Cash on Delivery
        <label htmlFor="enmb">e-Money Number</label>
        <input type="number" name="enmb" placeholder="238521993" />
        <label htmlFor="pin">e-Money PIN</label>
        <input type="number" name="pin" placeholder="6891" />
      </form>
    </section>
  );
};

export default Checkout;
