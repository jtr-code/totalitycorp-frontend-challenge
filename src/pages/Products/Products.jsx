import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import ProductList from "../../components/ProductList/ProductList";

import { useFilterContext } from "../../context/filterContext";

import "./Products.scss";

const Products = () => {
    const { filter_products } = useFilterContext();
    // console.log(
    //     "🚀 ~ file: Products.jsx:11 ~ Products ~ filter_products:",
    //     filter_products
    // );
    return (
        <section className='products-wrapper'>
            <div className='container grid grid-filter-column'>
                <div>
                    <FilterSection />
                </div>

                <section className='product-view--sort'>
                    <div className='main-product'>
                        <ProductList products={filter_products} />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Products;
