"use client";

import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";

const Authentication = () => {
  const { instance, accounts } = useMsal();
  useEffect(() => {
    if (accounts.length === 0) {
      instance.loginRedirect();
    } else if (accounts.length > 1) {
    }
  }, [accounts]);

  return <></>;
};

export default Authentication;
