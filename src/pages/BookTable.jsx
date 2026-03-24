import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { book_table, createDataId } from '../utils/function'
import Loader from "../components/Loader";

export default function BookTable() {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [loader, setLoader] = useState(false);


    const [peopleNo, setPeopleNo] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [tableNo, setTableNo] = useState();


    const submitForm = async (e) => {

        e.preventDefault();
        setLoader(true);
        try {
            const id = createDataId('tbl')
            const data = { idBox: id, name: name, email: email, phone: phone, peopleNo: peopleNo, date: date, time: time, tableNo: tableNo }
            
            await book_table(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false);
        }



        // console.log(data);

    }

    return (
        <>
            <Header />

            <Loader status={loader} />

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
                                            <div className="col-sm-12">
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
                                                    <select
                                                        className="form-control"
                                                        type="Number"
                                                        placeholder="Enter your name"
                                                        value={peopleNo}
                                                        onChange={(e) => { setPeopleNo(e.target.value) }}
                                                    >
                                                        <option>Select guest count</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <select
                                                        className="form-control"
                                                        type="Number"
                                                        placeholder="Enter your name"
                                                        value={tableNo}
                                                        onChange={(e) => { setTableNo(e.target.value) }}
                                                    >
                                                        <option>Select Table</option>
                                                        <option value="T-01">T-01</option>
                                                        <option value="T-02">T-02</option>
                                                        <option value="T-03">T-03</option>
                                                        <option value="T-04">T-04</option>
                                                        <option value="T-05">T-05</option>
                                                        <option value="T-06">T-06</option>
                                                        <option value="T-07">T-07</option>
                                                        <option value="T-08">T-08</option>
                                                        <option value="T-09">T-09</option>
                                                        <option value="T-11">T-10</option>
                                                        <option value="T-12">T-11</option>
                                                        <option value="T-13">T-12</option>
                                                        <option value="T-14">T-13</option>
                                                        <option value="T-15">T-14</option>
                                                        <option value="T-16">T-15</option>
                                                    </select>
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
                                            <div className="col-6">
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

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input value={date} onChange={(e) => { setDate(e.target.value) }} className="form-control" type="date"></input>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input value={time} onChange={(e) => { setTime(e.target.value) }} className="form-control" type="time"></input>
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
