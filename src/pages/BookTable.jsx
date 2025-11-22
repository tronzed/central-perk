import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { book_table } from '../utils/function'

export default function BookTable() {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [peopleNo, setPeopleNo] = useState();


    const submitForm = (e) => {

        e.preventDefault();

        const data = { name: name, email: email, phone: phone, peopleNo: peopleNo }
        book_table(data);
    }


    return (
        <>
            <Header />

            <>
                <>
                    {/* ================ contact section start ================= */}
                    <section className="contact-section section_padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="contact-title">Book Table</h2>
                                    <form
                                        className="form-contact contact_form"
                                        method="post"
                                        onSubmit={submitForm}
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        value={name}
                                                        onChange={(e) => { setName(e.target.value) }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Enter email address"
                                                        value={email}
                                                        onChange={(e) => { setEmail(e.target.value) }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="subject"
                                                        type="text"
                                                        placeholder="Phone No"
                                                        value={phone}
                                                        onChange={(e) => { setPhone(e.target.value) }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">

                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="No of people"
                                                        value={peopleNo}
                                                        onChange={(e) => { setPeopleNo(e.target.value) }}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <button type="submit" className="button button-contactForm btn_4">Submit</button>
                                        </div>
                                    </form>
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
