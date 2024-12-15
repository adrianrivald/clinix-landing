import Head from "next/head";
import { useRouter } from "next/router";
import {
  Client,
  Contact,
  Faq,
  Hero,
  Products,
  Testimoni,
  WhyUs,
  Banner,
  Points,
} from "../components";

export default function HomePage() {
  const router = useRouter();
  const onClickToDemo = () => {
    router.push("/demo");
  };
  return (
    <div>
      <Head>
        <title>Clinix</title>
        <meta name="description" content="Landing page of Clinix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero onClickToDemo={onClickToDemo} />
        <WhyUs />
        <Points />
        <Testimoni />
        <Contact />
        <Banner onClickToDemo={onClickToDemo} />
      </main>
    </div>
  );
}
