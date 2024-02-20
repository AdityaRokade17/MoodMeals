import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [signupinfo, setSignUpInfo] = useState({
        fullname : "",
        email : "",
        username: "",
        password: ""
    });

    const {fullname, email, username, password } = signupinfo;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            //console.log( "llllllll", logininfo);
            console.log(process.env.REACT_APP_BASE_URL);

            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/signup`,
                signupinfo,
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                console.log(message);
                setTimeout(() => {
                  console.log(success); 
                    navigate("/profile");
                    
                }, 1000);
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-black">
            <div className="p-6 m-auto bg-neutral-900 rounded-md shadow-xl w-10/12 sm:w-1/3 ">
                <h1 className="text-3xl font-semibold text-center text-white underline uppercase decoration underline-offset-8">
                    SIGN<span className='text-blue-600'>UP</span>
                </h1>
                <form className="mt-6" onSubmit={submitHandler}>
                    <div className="mb-2">
                        <label
                            htmlFor="fullname"
                            className="block text-sm font-semibold text-neutral-200"
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={fullname}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-neutral-200"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-neutral-200"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-neutral-100  "
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link
                        to={""}
                        className="text-xs text-red-500 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600">
                            SignUp
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to={"/login"}
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
