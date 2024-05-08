import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        // Check if email and password match the assumed credentials
        if (formData.email === "abc@gmail.com" && formData.password === "abc123") {
            // Valid credentials, navigate to the upload page
            navigate('/upload');
        } else {
            // Invalid credentials, show error alert
            alert("Invalid credentials!try email: abc@gmail.com password: abc123");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full h-full flex">
                <div className="w-full h-auto hidden lg:block bg-cover rounded-l-lg shadow-xl" style={{ backgroundImage: "url('pictures/img2.jpeg')" }}></div>
                <div className="w-full bg-white p-8 rounded-lg lg:rounded-l-none shadow-lg flex justify-center">
                    <div className="max-w-md w-full mx-auto flex flex-col justify-center h-full px-6">
                        <form className="px-8 pt-6 pb-8 mb-4 rounded shadow-md">
                            <h3 className="pt-4 mb-10 text-4xl text-center text-blue-800">Welcome Back!</h3>
                            <div className="mb-4">
                                <label className="block mb-2 text-m font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-m leading-tight text-gray-800 border border-gray-300 rounded shadow-sm focus:outline-none focus:shadow-outline bg-white"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-m font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-m leading-tight text-gray-800 border rounded shadow-sm focus:outline-none focus:shadow-outline bg-white"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleLogin}
                                >
                                  Log in
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            
                            <div className="text-center">
                                <Link className="inline-block text-m text-blue-500 align-baseline hover:text-blue-800" to="signup">
                                    Don't have an account? Sign up!
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
