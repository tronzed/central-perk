import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BookTable() {
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
                                        action="contact_process.php"
                                        method="post"
                                        id="contactForm"
                                        noValidate="novalidate"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter your name'"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter email address'"
                                                        placeholder="Enter email address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="subject"
                                                        id="subject"
                                                        type="text"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter Subject'"
                                                        placeholder="Phone No"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">

                                                    <input
                                                        className="form-control"
                                                        name="subject"
                                                        id="subject"
                                                        type="number"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter Subject'"
                                                        placeholder="No of people"
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
