"use client";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      <div className="flex justify-center text-center mt-44 ">
        <form className="bg-slate-400 p-3">
          <div>
            <p className="font-serif text-2xl"> Register</p>
          </div>
          <div>
            <input
              className="my-5 outline-none border-2 border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <input
              className="my-5 outline-none border-2 border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="my-2 outline-none border-2 border-blue-400 p-2 rounded-md w-60 bg-lime-400"
            >
              Register
            </button>
          </div>

          <div>
            <p className="text-xs">
              Have an account
              <span className="text-sm text-blue-600">
                <Link href="/login">Sign In</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
