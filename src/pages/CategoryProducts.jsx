import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./CategoryProducts.module.css";
import SingleProductUI from "../components/UI/SingleProductUI";
import MutualFooter from "../components/allPagesFooter/MutualFooter";
import { allProducts } from "../components/allProducts";

const CategoryProducts = () => {
  const params = useParams();

  const category = params.category;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = allProducts.filter(
    (product) => product.category === category
  );

  const onProductClickHandler = (e) => {
    console.log(e.target.parentNode.id)
  };

  return (
    <>
      <section className={classes["category-name"]}>{category}</section>
      {products.map((product) => {
        return <SingleProductUI
          key={product.id}
          id={product.id}
          imgSrc={product.image}
          newProduct={product.newProduct}
          productName={product.name}
          productDescription={product.description}
          onClick={onProductClickHandler}
          productCategory={product.category}
        />;
      })}
      <MutualFooter />
    </>
  );
};

export default CategoryProducts;
