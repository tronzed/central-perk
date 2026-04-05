import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <>

            <section className="banner_part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner_text">
                                <div className="banner_text_iner">
                                    <h5>Where Coffee Meets Friendship</h5>
                                    <h1>Deliciousness jumping into the mouth</h1>
                                    <p>
                                        The best brew in town, served with a side of laughter.
                                        Each sip feels like a warm hug from an old friend,
                                        each moment filled with stories, smiles, and the aroma of comfort.
                                        At Central Perk, it’s never just coffee — it’s a feeling called Friends.
                                    </p>
                                    <div className="banner_btn">
                                        <div className="banner_btn_iner">
                                            <Link to="/book" className="btn_2">
                                                Reservation <img src="img/icon/left_1.svg" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
