import { NavLink } from "react-router-dom";
import FormatPrice from "../FormatPrice/FormatPrice";

import "./Product.scss";

const Product = (elem) => {
    const { id, name, image, price, category } = elem;
    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className='card'>
                <figure className="figure">
                    <img src={image} alt={name} />
                    <figcaption className='caption'>{category}</figcaption>
                </figure>
                <div className='card-data'>
                    <div className='card-data-flex'>
                        <h3>{name}</h3>
                        <p className='card-data--price'>
                            {<FormatPrice price={price} />}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Product;
