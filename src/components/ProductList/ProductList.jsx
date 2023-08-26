import React from "react";
import Product from "../Product/Product";

import "./ProductList.scss";

const ProductList = ({ products }) => {
    // console.log(
    //     "🚀 ~ file: ProductList.jsx:5 ~ ProductList ~ products:",
    //     products
    // );
    return (
        <div className='grid-view--wrapper'>
            <div className='container grid grid-three-column'>
                {products.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />;
                })}
            </div>
        </div>
    );
};

export default ProductList;
