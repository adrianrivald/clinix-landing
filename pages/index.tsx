import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { Contact, Hero, Testimoni, WhyUs, Banner, Points } from "../components";

export default function HomePage() {
  const { t } = useTranslation("common");
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
        <Hero t={t} onClickToDemo={onClickToDemo} />
        <WhyUs t={t} />
        <Points t={t} />
        <Testimoni t={t} />
        <Contact t={t} />
        <Banner t={t} onClickToDemo={onClickToDemo} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale ?? "id", ["common"])),
  },
});
