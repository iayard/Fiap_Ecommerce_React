import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = createContext();

export const  CartProvider = (props) => {

    const [cartProducts, setCartProducts] = useState([]);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);