"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children, item }) => {
  return (
    <>
      <SessionProvider session={item}>{children}</SessionProvider>
    </>
  );
};

export default AuthProvider;
