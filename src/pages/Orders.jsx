import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Orders() {

    return (
        <>
            <Header />
            <>
                <>
                    <section className="contact-section section_padding">
                        <div className="container">

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


                            </div>

                        </div>
                    </section>
                </>

            </>
            <Footer />
        </>
    );
}
