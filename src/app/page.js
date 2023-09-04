"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const Home = () => {
  const [post, setPost] = useState([]);

  const session = useSession();

  const fetchData = async () => {
    let result = await fetch("http://localhost:8000/  ", {
      method: "Get",
      headers: {
        // authorization: `bearer ${session.user.accessToken}`,
      },
    });
    result = await result.json();
    setPost(result);
  };

  return (
    <>
      <button onClick={fetchData}>Get User Here</button>
    </>
  );
};

export default Home;
