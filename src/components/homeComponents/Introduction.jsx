import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <h2>NEW PRODUCT</h2>
        <h1>XX99 Mark II HeadphoneS</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/headphones/p1">
          <Button className={classes.btn}>See Product</Button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
