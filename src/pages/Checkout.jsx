import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Checkout.module.css";
import Button from "../components/UI/Button";
import Footer from "../components/allPagesFooter/Footer";
import Ordered from "../components/modals/Ordered";

const Checkout = () => {
  const navigate = useNavigate();
  const [checkedOption, setCheckedOption] = useState("emoney");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onBackClick = (e) => {
    e.preventDefault();
    navigate(-1, { replace: true });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkOption = (e) => {
    let selected;
    if (e.target.firstChild) {
      selected = e.target.firstChild.value;
    } else {
      selected = e.currentTarget.value;
    }
    setCheckedOption(selected);
  };

  const onSubmitCheckout = (e) => {
    e.preventDefault();
    console.log("submitted");

    setIsFormSubmitted(true);
  };

  return (
    <>
      <section className={classes.container}>
        <button className={classes["back-btn"]} onClick={onBackClick}>
          Go Back
        </button>
        <form action="" id="checkout-form" onSubmit={onSubmitCheckout}>
          <h1>checkout</h1>
          <h3>billing details</h3>
          <div className={classes["form-element"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Alexei Ward"
              id="name"
            />
          </div>
          <div className={classes["form-element"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="alexei@mail.com"
              id="email"
            />
          </div>
          <div className={classes["form-element"]}>
            <label htmlFor="nmb">Phone Number</label>
            <input
              type="number"
              name="nmb"
              placeholder="+1 202-555-0136"
              id="nmb"
            />
          </div>
          <h3>shipping info</h3>
          <label htmlFor="address">Your Address</label>
          <input
            type="text"
            name="address"
            placeholder="1137 Williams Avenue"
            id="address"
          />
          <div className={classes["form-element"]}>
            <label htmlFor="zip">ZIP Code</label>
            <input type="number" name="zip" placeholder="10001" id="zip" />
          </div>
          <div className={classes["form-element"]}>
            <label htmlFor="city">City</label>
            <input type="text" name="city" placeholder="New York" id="city" />
          </div>
          <div className={classes["form-element"]}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="United States"
              id="country"
            />
          </div>
          <h3>payment details</h3>
          <div className={classes["form-element"]}>
            <label htmlFor="method">Payment Method</label>
            <div
              className={`${classes.radio} ${
                checkedOption === "emoney" && classes.checked
              }`}
              onClick={checkOption}
            >
              <input
                type="radio"
                value="emoney"
                name="method"
                onChange={checkOption}
                checked={checkOption === "emoney"}
              />{" "}
              e-Money
            </div>
            <div
              className={`${classes.radio} ${
                checkedOption === "cash" && classes.checked
              }`}
              onClick={checkOption}
            >
              <input
                type="radio"
                value="cash"
                name="method"
                onChange={checkOption}
                checked={checkOption === "cash"}
              />{" "}
              Cash on Delivery{" "}
            </div>
          </div>
          {checkedOption === "emoney" && (
            <>
              <div className={classes["form-element"]}>
                <label htmlFor="enmb">e-Money Number</label>
                <input type="number" name="enmb" placeholder="238521993" />
              </div>
              <div className={classes["form-element"]}>
                <label htmlFor="pin">e-Money PIN</label>
                <input type="number" name="pin" placeholder="6891" />
              </div>
            </>
          )}
        </form>
        <section className={classes["cart-items"]}>
          <h2>summary</h2>
          {cartItems.map((item) => {
            return (
              <div
                key={Math.random().toString()}
                className={classes["summary-product"]}
              >
                <div>
                  <img src={item.img} alt="" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{`$ ${item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
                  </div>
                </div>
                <p>{`x${item.qty}`}</p>
              </div>
            );
          })}
          <div className={classes.total}>
            <div>
              <h6>total</h6>
              <p>{`$ ${totalPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
            </div>
            <div>
              <h6>shipping</h6>
              <p>$ 50</p>
            </div>
            <div>
              <h6>vat (included)</h6>
              <p>{`$ ${Math.round(totalPrice * 0.2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
            </div>
            <div>
              <h6>grand total</h6>
              <p>{`$ ${(totalPrice + 50)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
            </div>
          </div>
          <Button type="submit" form="checkout-form" className={classes.btn}>
            continue & pay
          </Button>
        </section>
      </section>
      <Footer />
      {isFormSubmitted && <Ordered />}
    </>
  );
};

export default Checkout;
