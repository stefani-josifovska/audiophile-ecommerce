import React from "react";
// import heroImgMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import classes from "./ShortBio.module.css";

const ShortBio = () => {
  return (
    <section className={classes.container}>
      <div className={classes.img}></div>
      {/* <img src={heroImgMobile} alt="a person listening to music" /> */}
      <h2>
        Bringing you the <span>best</span> audio gear
      </h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
};

export default ShortBio;
