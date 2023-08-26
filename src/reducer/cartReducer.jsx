const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, color, amount, product } = action.payload;

            let existingProduct = state.cart.find((curItem) => {
                return curItem.id === id + color;
            });

            if (existingProduct) {
                let updatedProduct = state.cart.map((curElem) => {
                    if (curElem.id === id + color) {
                        let newAmount = curElem.amount + amount;
                        if (newAmount >= curElem.max) {
                            newAmount = curElem.max;
                        }
                        return {
                            ...curElem,
                            amount: newAmount
                        };
                    } else {
                        return curElem;
                    }
                });
                return {
                    ...state,
                    cart: updatedProduct
                };
            } else {
                let cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    price: product.price,
                    image: product.image[0].url,
                    max: product.stock
                };
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                };
            }

        case "SET_INCREMENT":
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let ProductIncrement = curElem.amount + 1;
                    if (ProductIncrement >= curElem.max) {
                        ProductIncrement = curElem.max;
                    }

                    return {
                        ...curElem,
                        amount: ProductIncrement
                    };
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct
            };

        case "SET_DECREMENT":
            let decrementProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decProduct = curElem.amount - 1;
                    if (decProduct <= 1) {
                        decProduct = 1;
                    }
                    return {
                        ...curElem,
                        amount: decProduct
                    };
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: decrementProduct
            };

        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter(
                (curItem) => curItem.id !== action.payload
            );
            return {
                ...state,
                cart: updatedCart
            };

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };

        case "UPDATE_CART_TOTAL_PRICE_AND_ITEM":
            let { total_items, total_price } = state.cart.reduce(
                (accumulator, curElem) => {
                    let { price, amount } = curElem;

                    accumulator.total_items += amount;
                    accumulator.total_price += price * amount;

                    return accumulator;
                },
                {
                    total_items: 0,
                    total_price: 0
                }
            );
            return {
                ...state,
                total_items,
                total_price
            };

        default:
            return state;
    }
};

export default cartReducer;
