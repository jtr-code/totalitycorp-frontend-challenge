import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../../context/cartContext";
import CartItem from "../../components/CartItem/CartItem";
import FormatPrice from "../../components/FormatPrice/FormatPrice";

import "./Cart.scss";

const Cart = () => {
    const { cart, clearCart, total_price, shipping_fee } = useCartContext();
    const { isAuthenticated, user } = useAuth0();

    if (cart.length === 0) {
        return (
            <div className='emptydiv'>
                <h3>No Items in the Cart</h3>
            </div>
        );
    }
    return (
        <section className='cart--wrapper grid'>
            <div className='cart--container'>
                {isAuthenticated && (
                    <div className='cart-user--profile'>
                        <img src={user.picture} alt={user.name} />
                        <h2 className='cart-user--name'>{user.name}</h2>
                    </div>
                )}
                <div className='cart_heading grid grid-five-column'>
                    <p>ITEM</p>
                    <p className='cart-hide'>PRICE</p>
                    <p>QUANTITY</p>
                    <p className='cart-hide'>SUBTOTAL</p>
                    <p>REMOVE</p>
                </div>
                <hr />
                <div className='cart-item'>
                    {cart.map((curElem) => {
                        return <CartItem key={curElem.id} {...curElem} />;
                    })}
                </div>
                <hr />

                <div className='cart-two-button'>
                    <NavLink to='/products'>
                        <button className="btn--continue">Continue Shopping</button>
                    </NavLink>
                    <button onClick={clearCart} className='btn btn-clear'>
                        Clear Cart
                    </button>
                </div>
                {/* order total_amount */}
                <div className='order-total--amount'>
                    <div className='order-total--subdata'>
                        <div>
                            <p>subtotal:</p>
                            <p>
                                <FormatPrice price={total_price} />
                            </p>
                        </div>
                        <div>
                            <p>shipping fee:</p>
                            <p>
                                <FormatPrice price={shipping_fee} />
                            </p>
                        </div>
                        <hr />
                        <div>
                            <p>order total:</p>
                            <p>
                                <FormatPrice
                                    price={shipping_fee + total_price}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Cart;
