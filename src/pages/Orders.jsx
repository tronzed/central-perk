import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { getOrder } from "../utils/function";

import { auth } from "../firebase";

import { onAuthStateChanged } from "firebase/auth";

export default function Orders() {


    const [data, setData] = useState();

    const getData = async (id) => {
        const data = await getOrder(id);
        setData(data);
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                getData(user.uid);
            }
        })


    }, [])


    return (
        <>
            <Header />
            <>
                <>

                    <section className="contact-section section_padding">
                        <div className="container">

                            {data?.map((val, key) => {

                                return (

                                    <>
                                        <div className="order_info_cover">
                                            <div className="order_info_box">
                                                <div className="top_box">
                                                    <h5><span>Order Id</span>{val.orderId}</h5>
                                                    <h5><span>Date</span> {val.date} | {val.time}</h5>
                                                    <h5><span>Type</span> {val.orderType}</h5>
                                                    <h5><span>Total</span> {val.total}</h5>
                                                </div>
                                                <ul className="order_item_list">
                                                    {val?.cartData?.map((val, key) => (
                                                        <>
                                                            <li>{val?.name} <span>${val?.price}</span></li>
                                                        </>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )

                            })}
                            {/* 
                            <div className="order_info_cover">
                                <div className="order_info_box">
                                    <div className="top_box">
                                        <h5><span>Order Id</span> ORD-sghghrfg</h5>
                                        <h5><span>Date</span> 12-02-2026 | 11:04:26 pm</h5>
                                        <h5><span>Order</span> Type: Delivery</h5>
                                        <h5><span>Total</span> $399</h5>
                                    </div>
                                    <ul className="order_item_list">
                                        <li>Burger <span>$10</span></li>
                                        <li>Pasta <span>$20</span></li>
                                        <li>Pizza <span>$25</span></li>
                                        <li>Mecaroni <span>$11</span></li>
                                        <li>Sandwich <span>$30</span></li>
                                    </ul>
                                </div>
                            </div> */}



                        </div>
                    </section>
                </>

            </>
            <Footer />
        </>
    );
}
