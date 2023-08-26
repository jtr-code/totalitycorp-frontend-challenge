import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";


const CartContext = createContext();

const getLocalCartData = () => {
    let getLocalDataFromStorage = localStorage.getItem("cartData");
    // if (getLocalDataFromStorage === []) {
    // 	return [];
    // } else {
    // 	return JSON.parse(getLocalDataFromStorage);
    // }
    const parsedData = JSON.parse(getLocalDataFromStorage);
    if (!Array.isArray(parsedData)) return [];
    return parsedData;
};

const initialState = {
    cart: getLocalCartData(),
    total_items: "",
    total_amount: "",
    shipping_fee: 50000
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //to add products

    const addToCart = (id, color, amount, product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, color, amount, product }
        });
    };

    //to remove individual item

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    //Increment and Decrement

    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    };

    const setDecrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };

    //clear the entire cart

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    // localStorage to add data

    useEffect(() => {
        dispatch({ type: "UPDATE_CART_TOTAL_PRICE_AND_ITEM" });

        localStorage.setItem("cartData", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                clearCart,
                setIncrement,
                setDecrement
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

//custom hook

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };
