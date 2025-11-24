import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { getCartItmes } from '../utils/function'


export default function Cart() {


    const [cartData, setCartData] = useState();


    useEffect(() => {

        (async () => {
            const data = await getCartItmes();
            setCartData(data);
        })();

    }, []);

    return (
        <>
            <Header />

            {console.log(cartData, '=======cartData=====')}

            <>
                <>
                    {/* ================ contact section start ================= */}
                    <section className="cart-section section_padding">
                        <div className="container">

                            <div className="row">

                                <div className="col-sm-8">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Products</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {

                                                cartData?.map((item, key) => (

                                                    <>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        className="img-fluid me-5 rounded-circle"
                                                                        alt=""
                                                                        src="./assets/images/img_2.jpg"
                                                                        style={{ width: 80, height: 80 }}
                                                                    />
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <p className="mb-0 mt-4">{item?.name}</p>
                                                            </td>
                                                            <td>
                                                                <p className="mb-0 mt-4">{item?.price}$</p>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                                                    <i className="fa fa-times text-danger" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </>

                                                ))

                                            }




                                        </tbody>
                                    </table>


                                </div>
                                <div className="col-sm-4">

                                    <div className="bg-light rounded">
                                        <div className="p-4">
                                            <h1 className="display-6 mb-4">
                                                Cart <span className="fw-normal">Total</span>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="mb-0 me-4">Subtotal:</h5>
                                                <p className="mb-0">${cartData.total}</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h5 className="mb-0 me-4">Shipping</h5>
                                                <div className="">
                                                    <p className="mb-0">Flat rate: $3.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                            <h5 className="mb-0 ps-4 me-4">Total</h5>
                                            <p className="mb-0 pe-4">${cartData.total + 3}</p>
                                        </div>
                                        <a
                                            className="btn_4 w-100 text-center"
                                            type="button"
                                            href="/checkout"
                                            data-discover="true"
                                        >
                                            Proceed Checkout
                                        </a>
                                    </div>


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
