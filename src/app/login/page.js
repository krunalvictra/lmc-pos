"use client";
import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { Router } from "next/router";

function LoginPage() {
  const { instance, accounts } = useMsal();

  useEffect(() => {
    if (accounts.length) {
      // User is already signed in, you can redirect them to another page
      // For example, you can use Next.js Router to navigate to a different page
      Router.push("/");
    }
  }, [accounts]);

  const handleLogin = () => {
    instance.loginRedirect();
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default LoginPage;
