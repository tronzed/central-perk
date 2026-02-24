import { createContext, useEffect, useState } from "react";
import { getCartCount } from "../utils/function";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [box, setBox] = useState();

    const cartVal = async (id) => {
        const data = await getCartCount(id);
        setBox(data);
    }

    useEffect(() => {


        onAuthStateChanged(auth, (user) => {

            if (user) {
                (async () => {
                    const data = await getCartCount(auth?.currentUser?.uid);
                    setBox(data);
                })();
            }

        });



    }, [])

    return (
        <>
            <CartContext.Provider value={{ box, setBox, cartVal }}>
                {children}
            </CartContext.Provider>
        </>
    );

} 