import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { getCartItmes, placeOrder, deleteCartItem } from '../utils/function'
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import animationData from "../assets/empty_cart.json";
import { CartContext } from "../context/CartContext";


export default function Cart() {

    const {cartVal} = useContext(CartContext)

    const [cartData, setCartData] = useState();
    const [loader, setLoader] = useState(true);

    const nav = useNavigate();

    const orderData = (val) => {
        placeOrder(val);
        nav('/checkout')
    }
    
    const deleteCartData = async (val) => {
        setLoader(true);
        await deleteCartItem(val);
        const data = await getCartItmes();
        setCartData(data);
        setLoader(false)
        cartVal();
    }

    useEffect(() => {
        (async () => {
            const data = await getCartItmes();
            setCartData(data);
            setLoader(false)
        })();
    }, []);

    return (
        <>
            <Header />

            {/* {console.log(cartData, '-----cartData------')} */}

            <Loader status={loader} />

            <>
                <>
                    <section className="cart-section section_padding">
                        <div className="container">

                            {cartData?.length ?

                                (<>
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
                                                                                src="img/food_menu/single_food_1.png"
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
                                                                        <button onClick={() => { deleteCartData(item.cartId); }} className="btn btn-md rounded-circle bg-light border mt-4">
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
                                                        <p className="mb-0">${cartData?.total}</p>
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
                                                    <p className="mb-0 pe-4">${cartData?.total + 3}</p>
                                                </div>
                                                <button
                                                    className="btn_4 w-100 text-center"
                                                    type="button"
                                                    onClick={() => { orderData(cartData); }}
                                                >
                                                    Proceed Checkout
                                                </button>
                                            </div>


                                        </div>

                                    </div>
                                </>)
                                :
                                (<>


                                    <div className="cart_empty_box">
                                        <div className="anime_box">
                                            <Lottie animationData={animationData} loop={true} />
                                        </div>
                                        <h3>Empty Cart</h3>
                                    </div>


                                </>)}



                        </div>
                    </section>
                </>

            </>

            <Footer />

        </>
    );
}
