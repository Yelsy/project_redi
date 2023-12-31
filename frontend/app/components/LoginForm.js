// components/LoginForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "../styles/globals.css";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { data } = response;

        // Check if the response contains a token
        if (data.token) {
          // Store the token in local storage or state based on your needs
          localStorage.setItem("token", data.token);
          console.log("Login successful");

          // Close the form after performing the action
          onClose();
        } else {
          console.error("Error in login: Token not found");
          setError("Error in login. Please try again.");
        }
      } else {
        console.error("Error in login");
        setError("Error in login. Check your credentials.");
      }
    } catch (error) {
      // Handle request errors
      console.error("Error in request:", error.message);
      setError("Error in request. Please try again.");
    }

    // Cierra el formulario después de realizar la acción
    //onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
    
    >
      <div
        className="w-full bg-white rounded-lg shadow border border-black sm:max-w-md"
      
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-gray-900">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start"></div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              onClick={handleLogin}
            >
              Sign in
            </button>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            <p className="text-sm font-medium text-primary-600  dark:text-primary-500">
              Don’t have an account yet?
              <Link href="/signup">
                <span className="cursor-pointer font-bold">Sign up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
