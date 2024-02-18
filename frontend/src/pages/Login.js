import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({onLoginSuccess}) => {
    const navigate = useNavigate();
    const [logininfo, setLoginInfo] = useState({
        username: "",
        password: ""
    });

    const { username, password } = logininfo;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo(prevState => ({
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
                "http://localhost:4000/api/v1/login",
                logininfo,
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                console.log(message);
                setTimeout(() => {
                  console.log(success);
                    onLoginSuccess(success);    
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
            <div className="w-full p-6 m-auto bg-neutral-900 rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-white underline uppercase decoration underline-offset-8">
                    Log<span className='text-blue-600'>in</span>
                </h1>
                <form className="mt-6" onSubmit={submitHandler}>
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
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-400">
                    Don't have an account?{" "}
                    <Link
                        to={"/signup"}
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
