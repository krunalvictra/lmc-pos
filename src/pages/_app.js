import { Providers } from "@Redux/provider";
import "@styles/customBootstrap.scss";
import "@styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
