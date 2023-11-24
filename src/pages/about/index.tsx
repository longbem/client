import dynamic from "next/dynamic";
import About from "../../layouts/About";
import { ReactElement } from "react";
import Head from "next/head";

const MainLayout = dynamic(() => import("../../components/MainLayout"), {
  ssr: false,
});

const AboutLayout = () => {
  return (
    <>
      <Head>
        <title>Thông tin</title>
      </Head>
      <About />
    </>
  );
};

AboutLayout.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default AboutLayout;
