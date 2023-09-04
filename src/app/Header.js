"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const session = useSession();
  console.log(session);
  const router = useRouter();

  return (
    <>
      <div className="bg-slate-400 py-8  px-10 flex justify-end">
        {session.user ? (
          <button onClick={() => signOut()}>Logout</button>
        ) : (
          <button onClick={() => signIn()}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Header;
