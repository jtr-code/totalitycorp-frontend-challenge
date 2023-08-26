import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import FormatPrice from "../FormatPrice/FormatPrice";
import { useCartContext } from "../../context/cartContext";

import "./CartItem.scss";

const CartItem = ({ id, name, image, color, price, amount }) => {
    const { removeItem, setIncrement, setDecrement } = useCartContext();
    return (
        <div className='cart_heading grid grid-five-column'>
            <div className='cart-image--name'>
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='color-div'>
                        <p>color:</p>
                        <div
                            className='color-style'
                            style={{ backgroundColor: color, color: color }}
                        ></div>
                    </div>
                </div>
            </div>
            {/* Price */}
            <div className='cart-hide'>
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>
            {/* Quantity */}
            <CartAmountToggle
                amount={amount}
                setIncrement={() => setIncrement(id)}
                setDecrement={() => setDecrement(id)}
            />
            {/* Subtotal */}
            <div className='cart-hide'>
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>
            {/* Remove */}
            <div>
                <FaTrash
                    className='remove_icon'
                    onClick={() => removeItem(id)}
                />
            </div>
        </div>
    );
};

export default CartItem;
