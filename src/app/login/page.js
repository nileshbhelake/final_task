"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();

  const router = useRouter();

  console.log(session);

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn("github");
    router.push("/");
  };

  return (
    <>
      <div className="flex justify-center text-center mt-28 ">
        <form className="bg-slate-400 p-3" onSubmit={handleSubmit}>
          <div>
            <p className="font-serif text-2xl"> Login</p>
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
              Login
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="my-2 outline-none border-2 border-blue-400 p-2 rounded-md w-60 bg-blue-500"
            >
              Login with Google
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="my-2 outline-none border-2 border-blue-400 p-2 rounded-md w-60 bg-yellow-100"
            >
              Login with Github
            </button>
            <div>
              <p className="text-xs">
                Don't Have an account?
                <span className="text-sm text-blue-600">
                  <Link href="/register">Go to Register</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
