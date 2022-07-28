import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import Button from "../components/UI/Button";
import Footer from "../components/allPagesFooter/Footer";
import Ordered from "../components/modals/Ordered";
import { checkoutValidation } from "../components/checkoutValidation";
import classes from "./Checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();
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

  const onSubmitCheckout = (values) => {
    console.log(values);

    setIsFormSubmitted(true);
  };

  return (
    <>
      <section className={classes.container}>
        <button className={classes["back-btn"]} onClick={onBackClick}>
          Go Back
        </button>
        <Formik
          initialValues={{
            name: "",
            email: "",
            nmb: "",
            address: "",
            zip: "",
            city: "",
            country: "",
            method: "emoney",
            enmb: "",
            pin: "",
          }}
          validationSchema={checkoutValidation}
          onSubmit={onSubmitCheckout}
        >
          {({ values, errors, touched }) => (
            <Form id="checkout-form">
              <h1>checkout</h1>
              <h3>billing details</h3>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Alexei Ward"
                id="name"
              />
              {errors.name && touched.name && <div>{errors.name}</div>}

              <label htmlFor="email">Email Address</label>
              <Field
                type="email"
                name="email"
                placeholder="alexei@mail.com"
                id="email"
              />
              {errors.email && touched.email && <div>{errors.email}</div>}

              <label htmlFor="nmb">Phone Number</label>
              <Field
                type="number"
                name="nmb"
                placeholder="+1 202-555-0136"
                id="nmb"
              />
              {errors.nmb && touched.nmb && <div>{errors.nmb}</div>}

              <h3>shipping info</h3>
              <label htmlFor="address">Your Address</label>
              <Field
                type="text"
                name="address"
                placeholder="1137 Williams Avenue"
                id="address"
              />
              {errors.address && touched.address && <div>{errors.address}</div>}

              <label htmlFor="zip">ZIP Code</label>
              <Field type="number" name="zip" placeholder="10001" id="zip" />
              {errors.zip && touched.zip && <div>{errors.zip}</div>}

              <label htmlFor="city">City</label>
              <Field type="text" name="city" placeholder="New York" id="city" />
              {errors.city && touched.city && <div>{errors.city}</div>}

              <label htmlFor="country">Country</label>
              <Field
                type="text"
                name="country"
                placeholder="United States"
                id="country"
              />
              {errors.country && touched.country && <div>{errors.country}</div>}

              <h3>payment details</h3>
              <div role="group">
                <div className={`${classes.radio} ${values.method === "emoney" && classes.checked}`}>
                  <label>
                    <Field type="radio" name="method" value="emoney" />
                    e-Money
                  </label>
                </div>
                <div className={`${classes.radio} ${values.method === "cash" && classes.checked}`}>
                  <label>
                    <Field type="radio" name="method" value="cash" />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {values.method === "emoney" && (
                <>
                  <label htmlFor="enbm">e-Money Number</label>
                  <Field type="number" name="enmb" placeholder="238521993" />

                  <label htmlFor="pin">e-Money PIN</label>
                  <Field type="number" name="pin" placeholder="6891" />
                </>
              )}
            </Form>
          )}
        </Formik>

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
