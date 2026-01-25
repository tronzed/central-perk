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
                <section className="blog_item_section section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="section_tittle">
                                    <p>Popular Menu</p>
                                    <h2>Delicious Food Menu</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">


                            {
                                menuData?.map((value, key) => (
                                    <>

                                        <div className="col-sm-6 col-lg-3">
                                            <div className="single_blog_item">

                                                <div className="single_blog_img">
                                                    <img
                                                        src={`img/food_menu/single_food_${'1'}.png`}
                                                        className="mr-3"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="single_blog_text text-center">
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
                </section>


            </>


            <Footer />

        </>
    );
}
