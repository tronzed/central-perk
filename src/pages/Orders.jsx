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
                                    <div className="top_boxf">
                                        <h5>Order Id: ORD-sghghrfg</h5>
                                        <h5>Name: Tanuj Saini</h5>
                                        <h5>Date: 12-02-2026 | 11:04:26 pm</h5>
                                        <h5>Order Type: Delivery</h5>
                                    </div>
                                    <ul className="order_item_list">
                                        <li>Name: Burger <span>Price: $10</span></li>
                                        <li>Name: Pasta <fspan>Price: $20</span></li>
                                        <li>Name: Pizza <span>Price: $25</span></li>
                                        <li>Name: Mecaroni <span>Price: $11</span></li>
                                        <li>Name: Sandwich <span>Price: $30</span></li>
                                    </ul>
                                    <h5>Toatl: 399</h5>
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
