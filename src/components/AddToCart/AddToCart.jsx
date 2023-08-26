import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./AddToCart.scss";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import { useCartContext } from "../../context/cartContext";

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext();

    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);

    const setDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrement = () => {
        stock > amount ? setAmount(amount + 1) : amount(stock);
    };

    return (
        <section className='addtocart-wrapper'>
            <div className='colors'>
                <p>
                    Colors Available:
                    {colors.map((curColor, index) => {
                        return (
                            <button
                                key={index}
                                style={{ backgroundColor: curColor }}
                                className={
                                    color === curColor
                                        ? "btnStyle active"
                                        : "btnStyle"
                                }
                                onClick={() => setColor(curColor)}
                            >
                                {color === curColor ? (
                                    <FaCheck className='checkStyle' />
                                ) : null}
                            </button>
                        );
                    })}
                </p>
            </div>

            {/* Increment and Decrement for Add to cart */}

            <CartAmountToggle
                amount={amount}
                setDecrement={setDecrement}
                setIncrement={setIncrement}
            />

            {/* AddtoCart button */}

            <NavLink
                to='/cart'
                onClick={() => addToCart(id, color, amount, product)}
            >
                <button className='btn'>Add To Cart</button>
            </NavLink>
        </section>
    );
};

export default AddToCart;
