import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/shared/desktop/logo.svg";
import { fbLogo, twitterLogo, instaLogo } from "./logos";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.container}>
      <div className={classes["orange-line"]}></div>
      <img src={companyLogo} alt="company logo" />
      <ul>
        <Link to='/homepage' style={{ textDecoration: 'none' }} >
          <li>home</li>
        </Link>
        <Link to='/headphones' style={{ textDecoration: 'none' }} >
          <li>headphones</li>
        </Link>
        <Link to='/speakers' style={{ textDecoration: 'none' }} >
          <li>speakers</li>
        </Link>
        <Link to='/earphones' style={{ textDecoration: 'none' }} >
          <li>earphones</li>
        </Link>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p>Copyright 2021. All Rights Reserved</p>
      <div>
        {fbLogo}
        {twitterLogo}
        {instaLogo}
      </div>
    </section>
  );
};

export default Footer;
