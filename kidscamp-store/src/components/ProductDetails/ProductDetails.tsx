'use client'
import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import ProductDescription from "../ProductDescription/ProductDescription";

// Interface for product details props
interface ProductDetailsProps {
  title: string;
  price: number; 
  sizes: string[]; 
  shippingInfo: string; 
  description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, price, sizes, shippingInfo,description }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.productDetails}>
      <h1>{title}</h1>
      <div className={styles.price}>
        ${price}
      </div>
      <p className={styles.shipping}>{shippingInfo}</p>

      <div className={styles.sizeSelector}>
        <label>Select a size</label>
        <div className={styles.sizeOptions}>
          {sizes.map((size) => (
            <button
              key={size}
              className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ""}`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.addToCartButton}>Add to Cart</button>
      <ProductDescription description={description} /> 
    </div>
  );
};

export default ProductDetails;
