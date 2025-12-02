import { createContext, useEffect, useState } from "react";
import { getCartCount } from "../utils/function";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [box, setBox] = useState();

    const cartVal = async () => {
        const data = await getCartCount();
        setBox(data);
    }

    useEffect(() => {
        (async () => {
            const data = await getCartCount();
            setBox(data);
        })();
    }, [])

    return (
        <>
            <CartContext.Provider value={{ box, setBox, cartVal }}>
                {children}
            </CartContext.Provider>
        </>
    );

} 