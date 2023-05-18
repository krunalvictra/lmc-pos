import { store } from "@Redux/store";
import { Provider } from "react-redux";
import Authentication from "../components/authentication/authentication";
import AuthProvider from "./AuthProvider";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <Authentication />
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  );
}
