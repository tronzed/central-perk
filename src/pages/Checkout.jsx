import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// import { getCartItmes } from '../utils/function'

export default function Checkout() {

    // const [cartData, setCartData] = useState();

    useEffect(() => {

    }, []);

    return (
        <>
            <Header />

            <>
                <>
                    <section className="cart-section section_padding">
                        <div className="container">

                            <div className="row">

                            <h2 className="text-center">Ordered</h2>

                            </div>

                        </div>
                    </section>
                </>

            </>

            <Footer />

        </>
    );
}
