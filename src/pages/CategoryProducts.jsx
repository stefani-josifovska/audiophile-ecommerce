import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts/dist/esm/useMediaQuery";
import { useParams } from "react-router-dom";
import SingleProductUI from "../components/UI/SingleProductUI";
import MutualFooter from "../components/allPagesFooter/MutualFooter";
import { allProducts } from "../components/allProducts";
import classes from "./CategoryProducts.module.css";

const CategoryProducts = () => {
  const isTabletSize = useMediaQuery("(min-width: 481px");

  let imgPath = "";
  if (isTabletSize) {
    imgPath = "imageTablet";
  } else {
    imgPath = "image";
  }

  const params = useParams();

  const category = params.category;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = allProducts.filter(
    (product) => product.category === category
  );

  const onProductClickHandler = (e) => {
    console.log(e.target.parentNode.id);
  };

  return (
    <>
      <section className={classes["category-name"]}>{category}</section>
      {products.map((product) => {
        return (
          <SingleProductUI
            key={product.id}
            id={product.id}
            imgSrc={product[imgPath]}
            newProduct={product.newProduct}
            productName={product.name}
            productDescription={product.description}
            onClick={onProductClickHandler}
            productCategory={product.category}
          />
        );
      })}
      <MutualFooter />
    </>
  );
};

export default CategoryProducts;
