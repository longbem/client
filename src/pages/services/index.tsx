import dynamic from "next/dynamic";
import Service from "../../layouts/Services";
import { ReactElement } from "react";
import Head from "next/head";

const MainLayout = dynamic(() => import("../../components/MainLayout"), {
  ssr: false,
});

const ServicePage = () => {
  return (
    <>
      <Head>
        <title>Dịch vụ</title>
      </Head>
      <Service />
    </>
  );
};

ServicePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default ServicePage;
