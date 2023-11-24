import dynamic from "next/dynamic";
import { ReactElement } from "react";
import Head from "next/head";
import CarSale from "@/layouts/CarSale";

const MainLayout = dynamic(() => import("../../components/MainLayout"), {
  ssr: false,
});

const CarSaleLayout = () => {
  return (
    <>
      <Head>
        <title>Sản phẩm</title>
      </Head>
      <CarSale />
    </>
  );
};

CarSaleLayout.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default CarSaleLayout;
