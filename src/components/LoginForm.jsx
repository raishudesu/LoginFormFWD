import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <div className="w-full min-h-screen max-h-fit flex justify-center items-center overflow-hidden">
      <div className="w-[75%] md:w-[50%] lg:w-[30%] 2xl:w-[22%] flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full bg-[#FCFCFC] p-10 rounded-xl flex flex-col justify-center gap-3">
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-4xl">Login</h1>
            <h6 className="text-xs text-gray-500">
              Please enter your credentials
            </h6>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-xs">Username</p>
            <input
              type="text"
              placeholder="Enter Username"
              className="border-2 border-gray-100 p-1 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-xs">Password</p>
            <input
              type="text"
              placeholder="Enter Password"
              className="border-2 border-gray-100 p-1 rounded-full"
            />
          </div>
          <div className="">
            <p className="text-sm">
              Forgot Password?{" "}
              <span className="underline text-blue-600">Click here</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button className="bg-[#3CB8DF] w-full p-2 rounded-full text-white">
              Login
            </button>
            <p className="text-gray-500">or</p>
            <button className="w-full flex justify-center items-center gap-2 rounded-full p-1 border-2">
              <FcGoogle size={30} /> Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
