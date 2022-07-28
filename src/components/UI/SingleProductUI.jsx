import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./SingleProductUI.module.css";

const SingleProductUI = ({
  id,
  imgSrc,
  newProduct,
  productName,
  productDescription,
  productCategory,
  onClick,
}) => {
  return (
    <section id={id} className={classes.container}>
      <img src={imgSrc} alt="" />
      {newProduct && <h4>new product</h4>}
      <h2>{productName}</h2>
      <p>{productDescription}</p>
      <Link
        style={{ textDecoration: "none" }}
        to={`/${productCategory}/${id}`}
      >
        <Button onClick={onClick}>see product</Button>
      </Link>
    </section>
  );
};

export default SingleProductUI;
