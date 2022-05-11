import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="w-full h-screen flex justify-center items-center register-login">
    <div className="w-1/4 h-96 bg-white shadow-xl rounded-md p-5">
      <h1 className="text-center font-semibold text-gray-900 uppercase">
        Login
      </h1>

      <form className="mt-16 px-10">
        <label htmlFor="username" className="block">
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            className="w-full py-3 border px-3 focus:outline-gray-800"
          />
        </label>
        <label htmlFor="password" className="block mt-5">
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full py-3 border px-3 focus:outline-gray-800"
          />
        </label>
        <button
          type="submit"
          className="bg-gray-900 text-lg py-2 mt-5 w-full text-white mb-3 border-4 hover:border-4 hover:border-gray-800 hover:bg-white hover:text-gray-900"
        >
          Log in
        </button>
        <Link to="/register" className="text-blue-600">
          Register
        </Link>
      </form>
    </div>
  </div>
);

export default Login;
