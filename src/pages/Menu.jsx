import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { getMenuData, addCart, getCartData } from '../utils/function'
import Loader from "../components/Loader";
import { CartContext } from "../context/CartContext";

export default function About() {

    const { cartVal } = useContext(CartContext)

    const [menuData, setMenuData] = useState();
    const [loader, setLoader] = useState(true);
    const [cartData, setCartData] = useState([]);

    const getMenu = async () => {

        const data = await getMenuData();
        setMenuData(data);

        const data2 = await getCartData();
        setCartData(data2);
        
        setLoader(false);
        cartVal();
    };



    const checkCartBox = (val) => {
        const data = cartData.some(item => item.item == val);
        return data;
    }


    useEffect(() => {

        (async () => {
            const data = await getMenuData();
            setMenuData(data);
            setLoader(false);
        })();

        (async () => {
            const data = await getCartData();
            setCartData(data);
        })();

    }, []);


    return (
        <>

            <Header />

            <Loader status={loader} />

            <>
                <section className="food_menu gray_bg">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-5">
                                <div className="section_tittle">
                                    <p>Popular Menu</p>
                                    <h2>Delicious Food Menu</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="nav nav-tabs food_menu_nav" id="myTab" role="tablist">
                                    <a
                                        className="active"
                                        id="Special-tab"
                                        data-toggle="tab"
                                        href="#Special"
                                        role="tab"
                                        aria-controls="Special"
                                        aria-selected="false"
                                    >
                                        Special <img src="img/icon/play.svg" alt="play" />
                                    </a>
                                    <a
                                        id="Breakfast-tab"
                                        data-toggle="tab"
                                        href="#Breakfast"
                                        role="tab"
                                        aria-controls="Breakfast"
                                        aria-selected="false"
                                    >
                                        Breakfast <img src="img/icon/play.svg" alt="play" />
                                    </a>
                                    <a
                                        id="Launch-tab"
                                        data-toggle="tab"
                                        href="#Launch"
                                        role="tab"
                                        aria-controls="Launch"
                                        aria-selected="false"
                                    >
                                        Launch <img src="img/icon/play.svg" alt="play" />
                                    </a>
                                    <a
                                        id="Dinner-tab"
                                        data-toggle="tab"
                                        href="#Dinner"
                                        role="tab"
                                        aria-controls="Dinner"
                                        aria-selected="false"
                                    >
                                        Dinner <img src="img/icon/play.svg" alt="play" />{" "}
                                    </a>
                                    <a
                                        id="Sneaks-tab"
                                        data-toggle="tab"
                                        href="#Sneaks"
                                        role="tab"
                                        aria-controls="Sneaks"
                                        aria-selected="false"
                                    >
                                        Sneaks <img src="img/icon/play.svg" alt="play" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active single-member"
                                        id="Special"
                                        role="tabpanel"
                                        aria-labelledby="Special-tab"
                                    >

                                        <div className="row">

                                            {
                                                menuData?.map((value, key) => (
                                                    <>
                                                        <div className="col-sm-6">
                                                            <div className="single_food_item media">
                                                                <img
                                                                    src={`img/food_menu/single_food_${'1'}.png`}
                                                                    className="mr-3"
                                                                    alt="..."
                                                                />
                                                                <div className="media-body align-self-center">
                                                                    <h3>{value?.name}</h3>
                                                                    <h5>${value?.price}</h5>
                                                                    <button onClick={() => { addCart(value.fbId); setLoader(true); getMenu(); }} className={`add_btn`}>
                                                                        {checkCartBox(value.fbId) === true ? 'In Cart' : 'Add'}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>
                                                ))
                                            }

                                        </div>


                                    </div>

                                    <div
                                        className="tab-pane fade single-member"
                                        id="Breakfast"
                                        role="tabpanel"
                                        aria-labelledby="Breakfast-tab"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_4.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Easter Delight</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_5.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Tiener Schnitze</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_6.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Chicken Roast</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_1.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Pork Sandwich</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_2.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Roasted Marrow</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_3.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Summer Cooking</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade single-member"
                                        id="Launch"
                                        role="tabpanel"
                                        aria-labelledby="Launch-tab"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_1.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Pork Sandwich</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_2.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Roasted Marrow</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_3.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Summer Cooking</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_4.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Easter Delight</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_5.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Tiener Schnitze</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_6.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Chicken Roast</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade single-member"
                                        id="Dinner"
                                        role="tabpanel"
                                        aria-labelledby="Dinner-tab"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_4.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Easter Delight</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_5.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Tiener Schnitze</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_6.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Chicken Roast</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_1.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Pork Sandwich</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_2.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Roasted Marrow</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_3.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Summer Cooking</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade single-member"
                                        id="Sneaks"
                                        role="tabpanel"
                                        aria-labelledby="Sneaks-tab"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_1.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Pork Sandwich</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_2.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Roasted Marrow</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_3.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Summer Cooking</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-6">
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_4.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Easter Delight</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_5.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Tiener Schnitze</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                                <div className="single_food_item media">
                                                    <img
                                                        src="img/food_menu/single_food_6.png"
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                    <div className="media-body align-self-center">
                                                        <h3>Chicken Roast</h3>

                                                        <h5>$40.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>


            <Footer />

        </>
    );
}
