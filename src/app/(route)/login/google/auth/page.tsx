"use server"
import React from "react";

const Auth = ({ serverData } : any) => {
  return <div>get data : {serverData}</div>;
};

export async function getData() {
   const parsedHash = new URLSearchParams(window.location.hash.substring(1));
   const accessToken = parsedHash.get("access_token");

  const data = await fetch("api 주소/oauth/google", {
    method: "POST",
    next: { revalidate: 3600 },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accessToken }),
  });
  const serverData = await data.json();

  return {
    props: {
      serverData,
    },
  };
}

export default Auth;