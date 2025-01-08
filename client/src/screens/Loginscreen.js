import React, { useState } from 'react';
import axios from 'axios';

function Loginscreen() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    async function Login() {
        const user = {
            email,
            password,
        };

        try {
            const response = await axios.post("/api/users/login", user); // Await the response object
            console.log("Login successful:", response.data); // Access the data property
            alert(`Login Successful. Welcome, ${response.data.name}`);
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className='bs'>
                        <h2> Login</h2>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="email"
                            value={email} 
                            onChange={(e) => setemail(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="password"
                            value={password} 
                            onChange={(e) => setpassword(e.target.value)} 
                        />
                        <button className='btn btn-primary mt-3' onClick={Login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginscreen;
