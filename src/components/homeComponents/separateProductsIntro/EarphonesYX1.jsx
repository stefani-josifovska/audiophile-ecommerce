import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import earphonesImg from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import classes from "../ProductsIntro.module.css";

const EarphonesYX1 = () => {
  return (
    <section className={classes["earphones-container"]}>
      <img src={earphonesImg} alt="earphones" />
      <div className={classes["earphones-mask"]}>
        <h2>YX1 earphones</h2>
        <Link to="/earphones/p6">
          <Button className={classes["btn-transparent"]}>see product</Button>
        </Link>
      </div>
    </section>
  );
};

export default EarphonesYX1;
