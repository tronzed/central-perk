import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { auth } from '../firebase'

import { profileAddDetail, getProfileData } from '../utils/function'
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../components/Loader";

export default function Profile() {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const [date, setDate] = useState();
    const [address, setAddress] = useState();
    const [loader, setLoader] = useState(true);


    const userId = auth?.currentUser?.uid;

    const submitForm = async (e) => {
        e.preventDefault();
        setLoader(true);
        
        const data = { name: name, email: email, phone: phone, date: date, address: address }
        await profileAddDetail(data, userId);
        
        setLoader(false);

    }


    const getDetail = async (id) => {

        const data = await getProfileData(id);
        setName(data?.name);
        setEmail(data?.email);
        setPhone(data?.phone);
        setDate(data?.date);
        setAddress(data?.address);
        setLoader(false);

    }


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                getDetail(user.uid);
            }

        })

    }, [])


    return (
        <>
            <Header />

            <Loader status={loader} />

            <>
                <>
                    <section className="contact-section section_padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="contact-title">Profile</h2>
                                    <form
                                        className="form-contact contact_form"
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

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea placeholder="Enter Address" rows="5" value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" type="date"></textarea>
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
