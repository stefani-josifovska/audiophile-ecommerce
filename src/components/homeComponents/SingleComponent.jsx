import React from "react";
import { Link } from "react-router-dom";
import classes from "./SingleComponent.module.css";
const arrowRight = (
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.322 1l5 5-5 5"
      stroke="#D87D4A"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const SingleComponent = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.src} alt={props.alt} />
      <div className={classes.mask}>
        <h3>{props.productName}</h3>
        <Link style={{ textDecoration: 'none' }} to={`/${props.productName}`}>
          <div onClick={props.onClick}>
            <h5>shop</h5>
            {arrowRight}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleComponent;
