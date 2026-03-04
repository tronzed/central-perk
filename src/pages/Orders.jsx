import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { getOrder } from "../utils/function";

import { auth } from "../firebase";

import { onAuthStateChanged } from "firebase/auth";

export default function Orders() {


    const [data, setData] = useState();

    const [feedbackBtn, setFeedbackBtn] = useState(null);

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
                            {data && (

                                <>
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
                                                            <li className="feedback_box">
                                                                <button className="btn btn-light" onClick={() => { setFeedbackBtn(val?.orderId) }}>Rate Order</button>

                                                                {feedbackBtn === val?.orderId && (
                                                                    <>
                                                                        <div className="feedback_form_box">
                                                                            <form
                                                                                className="form-contact contact_form"
                                                                                method="post"
                                                                            >
                                                                                <div className="form-group">
                                                                                    <label>Give Rateing</label>
                                                                                    <select
                                                                                        className="form-control"
                                                                                        type="Number"
                                                                                        placeholder="Enter your name"
                                                                                    >
                                                                                        <option>Select Star</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                        <option value="4">4</option>
                                                                                        <option value="5">5</option>
                                                                                    </select>
                                                                                </div>

                                                                                <div className="form-group">
                                                                                    <label>Give Feedback</label>
                                                                                    <textarea
                                                                                        className="form-control"
                                                                                        type="text"
                                                                                        placeholder="Enter your name"
                                                                                    ></textarea>
                                                                                </div>
                                                                                <div className="form-group mt-3">
                                                                                    <button type="submit" className="button button-contactForm btn_4">Submit</button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </>
                                                                )}

                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>
                                        )

                                    })}
                                </>

                            )}
                        </div>
                    </section>
                </>

            </>
            <Footer />
        </>
    );
}
