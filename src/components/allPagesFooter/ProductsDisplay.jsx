import React from "react";
import { useDispatch } from 'react-redux';
import { menuActions } from "../../store/menuSlice";
import SingleComponent from "../homeComponents/SingleComponent";
import headphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerThumbnail from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import classes from "../homeComponents/SingleComponent.module.css";

const productsToDisplay = [
  { productName: "headphones", image: headphonesThumbnail },
  { productName: "speakers", image: speakerThumbnail },
  { productName: "earphones", image: earphonesThumbnail },
];

const ProductsDisplay = () => {
  const dispatch = useDispatch();

  const onItemClickHandler = () => {
    dispatch(menuActions.closeMenu());
  };

  return (
    <section className={classes['components-container']}>
      {productsToDisplay.map((product) => {
        return (
          <SingleComponent
            key={Math.random().toString()}
            src={product.image}
            alt={`An image of ${product.productName}`}
            productName={product.productName}
            onClick={onItemClickHandler}
          />
        );
      })}
    </section>
  );
};

export default ProductsDisplay;
