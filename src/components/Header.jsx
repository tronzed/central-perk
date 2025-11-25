import { Link, useLocation } from 'react-router-dom';
import Banner from './Banner'
import Breadcrumb from './Breadcrumb'
import { useEffect, useState } from 'react';

import { getCartCount } from '../utils/function'

export default function Header() {


    const [breadBox, setBreadBox] = useState();

    const [cartCount, setCartCount] = useState(0);

    const pageLoc = useLocation().pathname;

    function bread() {

        if (pageLoc == '/') {
            setBreadBox(<Banner />);
        } else {
            setBreadBox(<Breadcrumb />);
        }
    }


    useEffect(() => {

        (async () => {

            const data = await getCartCount();
            setCartCount(data);

        })();


        bread();
    }, []);


    return (
        <>
            <header className={`main_menu ${pageLoc == "/" ? 'home_menu' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" to="/">
                                    {" "}
                                    <img src="img/logo_ms.png" alt="logo" />{" "}
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse main-menu-item justify-content-end"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/menu">
                                                Menu
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/chefs">
                                                Chefs
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>


                                <div className='menu_side_box'>
                                    <div className='cart_box'>
                                        <Link to="/cart" className="cart_btn">
                                            <i className='ti-shopping-cart'></i>
                                            {cartCount !== 0 && (
                                                <span className='count_box'> {cartCount}</span>
                                            )}
                                        </Link>
                                    </div>
                                    <div className="menu_btn_box">
                                        <Link to="/book" className="btn_1 d-none d-sm-block">
                                            <i className='ti-pencil-alt'></i>
                                            Book A Tabel
                                        </Link>
                                    </div>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {breadBox}

        </>
    );
}
