import React from "react";
import { Link } from "react-router-dom";
import speakerImg from "../../../assets/home/mobile/image-speaker-zx9.png";
import Button from "../../UI/Button";
import classes from "../ProductsIntro.module.css";

const SpeakerZX9 = () => {
  return (
    <section className={classes["speaker-one-container"]}>
      <img src={speakerImg} alt="The ZX9 speaker" />
      <h2>ZX9 SPEAKER</h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Link to="/speakers/p4">
      <Button className={classes["btn-black"]}>see product</Button></Link>
    </section>
  );
};

export default SpeakerZX9;
