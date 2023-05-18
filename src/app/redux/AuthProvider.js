// "use client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const AuthProvider = ({ children }) => {
  const msalInstance = new PublicClientApplication(msalConfig);
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};
export default AuthProvider;
