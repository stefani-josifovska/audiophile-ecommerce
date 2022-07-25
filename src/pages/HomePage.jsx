import React, { useEffect } from "react";
import Introduction from "../components/homeComponents/Introduction";
import ProductsDisplay from "../components/allPagesFooter/ProductsDisplay";
import ProductsIntro from "../components/homeComponents/ProductsIntro";
import ShortBio from "../components/allPagesFooter/ShortBio";
import Footer from "../components/allPagesFooter/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Introduction />
      <ProductsDisplay />
      <ProductsIntro />
      <ShortBio />
      <Footer />
    </>
  );
};

export default HomePage;
