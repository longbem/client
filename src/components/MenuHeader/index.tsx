import React, { useMemo } from "react";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, Image, Progress } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    label: (
      <Link href="/car-sale" className={styles.labelMenu}>
        Sản phẩm
      </Link>
    ),
    key: "/car-sale",
  },
  {
    label: (
      <Link href="/services" className={styles.labelMenu}>
        Dịch vụ
      </Link>
    ),
    key: "/services",
  },
  {
    label: (
      <Link href="/about" className={styles.labelMenu}>
        Thông tin
      </Link>
    ),
    key: "/about",
  },
];

const MenuHeader = () => {
  const router = useRouter();

  const changeLanguage = () => {
    if (router.locale === "en") {
      router.push(router.pathname, router.asPath, {
        locale: "vi",
      });
    } else {
      router.push(router.pathname, router.asPath, {
        locale: "en",
      });
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const menuOnActive = () => {
    switch (router.pathname) {
      case "/":
      case "/home":
        return ["/home"];
      case "/car-sale":
        return ["/car-sale"];
      case "/services":
        return ["/services"];
      case "/about":
        return ["/about"];
    }
  };

  const percent = useMemo(() => {
    let _percent = 0;

    for (let i = 0; i <= 100; i++) {
      _percent = i;
    }

    return _percent;
  }, []);
  console.log("🚀 ~ file: index.tsx:77 ~ percent ~ percent:", percent);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              width={100}
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/BEM_logo.svg/686px-BEM_logo.svg.png?20210313041543"
              preview={false}
            />
          </Link>
        </div>
        <div className={styles.linkList}>
          <Menu
            style={{
              minWidth: 0,
              flex: "auto",
              justifyContent: "flex-end",
              borderBottom: 0,
            }}
            defaultSelectedKeys={menuOnActive()}
            inlineIndent={20}
            overflowedIndicator={<MenuOutlined rev={undefined} />}
            mode="horizontal"
            items={items}
          />
        </div>
      </div>
      {/* <div className={styles.progress}>
        <Progress
          percent={percent}
          status="active"
          style={{ width: "90%", alignItems: "center" }}
          strokeWidth={3}
          showInfo={false}
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
        />
      </div> */}
    </>
  );
};
export default MenuHeader;
