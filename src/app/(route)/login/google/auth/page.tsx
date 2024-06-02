import React from "react";

export default function Auth() {
  const getAccessToken = async () => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    // const { data } = await Api.post("oauth/google", { accessToken });
  };
  return <div>Auth</div>;
}
