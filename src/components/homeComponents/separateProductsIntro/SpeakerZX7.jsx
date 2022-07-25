import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "../ProductsIntro.module.css";

const SpeakerZX7 = () => {
  return (
    <section className={classes["speaker-two-container"]}>
      <div>
        <h2>ZX7 SPEAKER</h2>
        <Link to="/speakers/p5">
          <Button className={classes["btn-transparent"]}>see product</Button>
        </Link>
      </div>
    </section>
  );
};

export default SpeakerZX7;
