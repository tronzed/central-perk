import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { useState } from "react";
import { profileAddDetail } from '../utils/function'

export default function Signup() {

    const nav = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nameBox, setNameBox] = useState();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(res.user,{
                displayName:nameBox
            });

            await profileAddDetail(res.user.uid);

            // nav('/');
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="auth_form_cover">
                <div className="container">
                    <div className="auth_form_box">
                        <h3>Sign Up</h3>
                        <form onSubmit={(e) => { handleSubmit(e) }}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    required
                                    value={nameBox}
                                    onChange={(e) => { setNameBox(e.target.value) }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="button button-contactForm w-100">Submit</button>
                            </div>
                            <div className="link_box">
                                <Link to="/login">Login</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}