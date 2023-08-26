import { useEffect } from "react";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useProductContextGlobal } from "../../context/productContext";

import "./SingleProduct.scss";
//components
import MyImage from "../../components/MyImage/MyImage";
import Star from "../../components/Star/Star";
import PageNavigate from "../../components/PageNavigate/PageNavigate";
import FormatPrice from "../../components/FormatPrice/FormatPrice";
import AddToCart from "../../components/AddToCart/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
    const { id } = useParams();

    const { getSingleProduct, isSingleLoading, singleProduct } =
        useProductContextGlobal();

    const {
        // eslint-disable-next-line
        id: alias,
        name,
        price,
        company,
        stock,
        reviews,
        stars,
        description,
        image
    } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);

    if (isSingleLoading) {
        return <div className='page_loading'>Loading.....</div>;
    }
    return (
        <div className='Wrapper'>
            <PageNavigate title={name} />
            <section className='singlepage-container'>
                <div className='grid grid-two-column'>
                    {/* product Images  */}

                    <div className='product-images'>
                        <MyImage imgs={image} />
                    </div>

                    {/* product data  */}

                    <div className='product-data'>
                        <h1>{name}</h1>
                        <Star stars={stars} reviews={reviews} />
                        <p className='product-data-price'>
                            MRP:
                            <del>
                                <FormatPrice price={price + 250000} />
                            </del>
                        </p>
                        <p className='product-data-price product-data-real-price'>
                            Deal of the Day: <FormatPrice price={price} />
                        </p>
                        <p>{description}</p>
                        <div className='product-data-warranty'>
                            <div className='product-warranty-data'>
                                <TbTruckDelivery className='warranty-icon' />
                                <p>Free Delivery</p>
                            </div>

                            <div className='product-warranty-data'>
                                <TbReplace className='warranty-icon' />
                                <p>30 Days Replacement</p>
                            </div>

                            <div className='product-warranty-data'>
                                <TbTruckDelivery className='warranty-icon' />
                                <p>Special Delivery Available </p>
                            </div>

                            <div className='product-warranty-data'>
                                <MdSecurity className='warranty-icon' />
                                <p>2 Year Warranty </p>
                            </div>
                        </div>

                        {stock > 0 && <AddToCart product={singleProduct} />}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleProduct;
