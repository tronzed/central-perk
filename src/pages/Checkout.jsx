import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import animationData from "../assets/order.json";
import { getCartItmes } from '../utils/function'
import Lottie from "lottie-react";

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

                            <div className="order_box">
                                <h2>Ordered Placed</h2>

                                <div className="lott_order_box">
                                    <Lottie animationData={animationData} loop={false} />
                                </div>
                            </div>

                        </div>
                    </section>
                </>

            </>

            <Footer />

        </>
    );
}
