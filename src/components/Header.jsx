import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Banner from './Banner'
import Breadcrumb from './Breadcrumb'
import { useContext, useEffect, useState } from 'react';

import { getCartCount } from '../utils/function'
import { CartContext } from '../context/CartContext';


export default function Header() {

    const { box } = useContext(CartContext);

    const nav = useNavigate();

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

    const userBox = auth.currentUser;

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {

                (async () => {

                    const data = await getCartCount(auth?.currentUser?.uid);
                    setCartCount(data);

                })();

            }

        })

        bread();

        onAuthStateChanged(auth, (user) => {
            if (!user) {
                nav('/login');
            }
        });

    }, []);


    return (
        <>
            <header className={`main_menu ${pageLoc == "/" ? 'home_menu' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" to="/">
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
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" to="/about">
                                                About
                                            </Link>
                                        </li> */}
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
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" to="/contact">
                                                Contact
                                            </Link>
                                        </li> */}
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle">
                                                {'Hi ' + userBox?.displayName || 'User'}
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" to="/profile">
                                                    Profile
                                                </Link>
                                                <Link className="dropdown-item" to="/orders">
                                                    Orders
                                                </Link>
                                                <button onClick={handleSignOut} className="dropdown-item ">
                                                    Sign Out
                                                </button>
                                            </div>
                                        </li>



                                    </ul>
                                </div>

                                <div className='menu_side_box'>
                                    <div className='cart_box'>
                                        <Link to="/cart" className="cart_btn">
                                            <i className='ti-shopping-cart'></i>
                                            {box != 0 && (
                                                <>
                                                    <span className='count_box'> {box} </span>
                                                </>
                                            )}
                                        </Link>
                                    </div>
                                    <div className="menu_btn_box">
                                        <Link to="/book" className="btn_1 d-none d-sm-block">
                                            <i className='ti-pencil-alt'></i>
                                            Book Tabel
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
