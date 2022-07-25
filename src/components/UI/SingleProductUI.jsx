import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./SingleProductUI.module.css";

const SingleProductUI = (props) => {
  return (
    <section id={props.id} className={classes.container}>
      <img src={props.imgSrc} alt="" />
      {props.newProduct && <h4>new product</h4>}
      <h2>{props.productName}</h2>
      <p>{props.productDescription}</p>
      <Link style={{ textDecoration: "none" }} to={`/${props.productCategory}/${props.id}`}>
        <Button onClick={props.onClick}>see product</Button>
      </Link>
    </section>
  );
};

export default SingleProductUI;
