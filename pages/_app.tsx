import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // max-w-[100rem]
    <section className="w-full mx-auto text-neutral-500">
      <Header />
      <div>
        <Component {...pageProps} />
        <Footer />
      </div>
    </section>
  );
}
