import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password
            };

            try {
                const response = await axios.post("/api/users/register", user).data // Send user object directly
                //console.log("Registration successful:", response.data);
                alert("Registration Successful");
            } catch (error) {
                console.error("Registration error:", error);
                alert("Registration failed. Please try again.");
            }
        } else {
            alert("Passwords do not match");
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="bs">
                        <h2>Register</h2>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={cpassword}
                            onChange={(e) => setCPassword(e.target.value)}
                        />

                        <button className="btn btn-primary mt-3" onClick={register}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
