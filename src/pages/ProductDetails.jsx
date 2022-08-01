import React, { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts/dist/esm/useMediaQuery";
import { useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { allProducts } from "../components/allProducts";
import MutualFooter from "../components/allPagesFooter/MutualFooter";
import { cartActions } from "../store/cartSlice";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const isTabletSize = useMediaQuery(`(min-width: 481px)`);

  let imgPath = "image";
  let previewImgPath = "previewImg";

  if (isTabletSize) {
    imgPath = "separateImageTablet";
    previewImgPath = "separateImageTablet";
  }

  const { id } = useParams();
  const [addQty, setAddQty] = useState(1);
  const dispatch = useDispatch();

  const product = allProducts.find((product) => product.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onRemoveFromQty = () => {
    if (addQty > 1) {
      setAddQty((prev) => prev - 1);
    }
  };

  const onAddToQty = () => {
    setAddQty((prev) => prev + 1);
  };

  const onBackClick = (e) => {
    e.preventDefault();
    navigate(-1, { replace: true });
  };

  const onAddToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        productId: product.id,
        img: product.image,
        name: product.name.substring(0, product.name.lastIndexOf(" ")),
        price: product.price,
        qty: addQty,
      })
    );
  };

  const onViewNewProduct = () => {
    window.scrollTo(0, 0);
    setAddQty(1);
  };

  return (
    <>
      <section className={classes.container}>
        <button className={classes.back} onClick={onBackClick}>
          Go Back
        </button>
        <div className={classes["subcontainer"]}>
          <img src={product[imgPath]} alt="" />
          <div>
            {product.newProduct && <h4>new product</h4>}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h6 className={classes.price}>{`$ ${product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</h6>
            <div className={classes["qty-container"]}>
              <div className={classes.qty}>
                <button onClick={onRemoveFromQty}>-</button>
                <h6>{addQty}</h6>
                <button onClick={onAddToQty}>+</button>
              </div>
              <Button className={classes.btn} onClick={onAddToCartHandler}>
                add to cart
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.features}>
          <h3>features</h3>
          <p>{product.features1}</p>
          <p>{product.features2}</p>
        </div>
        <div className={classes.box}>
          <h3>in the box</h3>
          <ul>
            {product.includes.map((item) => {
              return (
                <li key={Math.random().toString()}>
                  <p>
                    <span>{`${item.qty}x `}</span>
                    {item.product}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.images}>
          {product.images.map((img) => {
            return <img src={img} alt="" key={Math.random().toString()} />;
          })}
        </div>
        <div className={classes.suggestions}>
          <h3 style={{ marginTop: "120px", marginBottom: "40px" }}>
            you may also like
          </h3>
          <div className={classes["suggestions-container"]}>
            {product.suggestions.map((id) => {
              let item = allProducts.find((product) => product.id === id);
              return (
                <section key={Math.random().toString()}>
                  <img src={item[previewImgPath]} alt="" />
                  <h3 style={{ marginTop: "32px", marginBottom: "32px" }}>
                    {item.name.substring(0, item.name.lastIndexOf(" "))}
                  </h3>
                  <Link to={`/${item.category}/${id}`}>
                    <Button
                      className={classes["see-product"]}
                      onClick={onViewNewProduct}
                    >
                      See product
                    </Button>
                  </Link>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <MutualFooter />
    </>
  );
};

export default ProductDetails;
