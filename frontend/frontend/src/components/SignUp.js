import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate(); // Move useNavigate inside the component body

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        const newErrors = {};
        for (const key in formData) {
            if (!formData[key]) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        }
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Passwords match, redirect to "/uploads"
            if (formData.password === formData.confirmPassword) {
                // Submit the form
                console.log("Form submitted:", formData);
                setTimeout(() => {
                    alert("User registered successfully!");
                    // Redirect to "/uploads"
                    navigate("/upload");
                }, 100);
            } else {
                // Passwords don't match, show error message
                alert("Passwords do not match");
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full h-full flex">
                <div className="w-full h-auto hidden lg:block bg-cover rounded-l-lg shadow-xl" style={{ backgroundImage: "url('pictures/img1.jpeg')" }}></div>
                <div className="w-full bg-white p-8 rounded-lg lg:rounded-l-none shadow-lg flex justify-center">
                    <div className="max-w-md w-full mx-auto flex flex-col justify-center h-full px-6">
                        <form className="px-8 pt-6 pb-8 mb-4 rounded shadow-md">
                            <h3 className="pt-4 mb-10 text-4xl text-center text-blue-800">Create an Account</h3>
                            <div className="mb-6">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-800 border border-gray-300 rounded shadow-sm focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-800 border border-gray-300 rounded shadow-sm focus:outline-none focus:shadow-outline "
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-800 border rounded shadow-sm focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-800 border rounded shadow-sm focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirmPassword">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-800 border rounded shadow-sm focus:outline-none focus:shadow-outline"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />

                                <div className="text-center">
                                    <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/">
                                        Already have an account? Login!
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
