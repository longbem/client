import dynamic from "next/dynamic";
import styles from "./index.module.scss";
import { FC, ReactNode } from "react";
import Banner from "../Banner";

const MenuHeader = dynamic(() => import("../MenuHeader"));

const Footer = dynamic(() => import("../Footer"));

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <MenuHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
