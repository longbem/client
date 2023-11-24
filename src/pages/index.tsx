import dynamic from "next/dynamic";
import Head from "next/head";
import Home from "../layouts/Home";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("../components/MainLayout"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Home />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default HomePage;

// export default function MyApp() {
//   return (
//     <MainLayout>
//       <HomePage />
//     </MainLayout>
//   )
// }
