import React from "react";
import SpeakerZX9 from "./separateProductsIntro/SpeakerZX9";
import SpeakerZX7 from "./separateProductsIntro/SpeakerZX7";
import EarphonesYX1 from "./separateProductsIntro/EarphonesYX1";
import classes from './ProductsIntro.module.css';

const ProductsIntro = () => {
    return (
        <section className={classes.container}>
            <SpeakerZX9 />
            <SpeakerZX7 />
            <EarphonesYX1 />
        </section>
    )
};

export default ProductsIntro;