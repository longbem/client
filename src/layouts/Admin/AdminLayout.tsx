import React, { useState } from "react";
import { Button, Layout, Menu, Image } from "antd";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { deleteCookie, getCookies } from "cookies-next";
import {
  CarOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }: { children: any }) => {
  const [collapsed, setCollapsed] = useState(false);
  //@ts-ignore

  const router = useRouter();

  const handleLogout = () => {
    router.push("/admin/login");
    deleteCookie("adminId");
    deleteCookie("accessTokenAdmin");
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const activeMenu = () => {
    switch (router.pathname) {
      case "/admin/dashboard":
        return ["1"];
      case "/admin/warehouse-management":
        return ["2"];
      case "/admin/about":
        return ["3"];
      default:
        return [];
    }
  };

  return (
    <Layout className={styles.managerLayout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          borderRight: "1px solid rgba(229,215,238,3)",
          minWidth: "270px",
          background: "#FFFFFF",
        }}
      >
        <div className={styles.boxLogo}>
          <Button
            onClick={toggleCollapsed}
            style={{ top: collapsed ? 10 : -12 }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined rev={undefined} />
            ) : (
              <MenuFoldOutlined rev={undefined} />
            )}
          </Button>

          {!collapsed && (
            <div className={styles.logo}>
              <Image
                width={100}
                alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/BEM_logo.svg/686px-BEM_logo.svg.png?20210313041543"
              />
            </div>
          )}
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={activeMenu()}
          style={{
            height: "100vh",
          }}
          items={[
            {
              key: "1",
              icon: <CarOutlined rev={undefined} />,
              label: (
                <div
                  onClick={() => {
                    router.push("/admin/dashboard");
                  }}
                >
                  Quản lý Xe
                </div>
              ),
            },
            {
              key: "2",
              icon: <HomeOutlined rev={undefined} />,
              label: (
                <div
                  onClick={() => {
                    router.push("/admin/warehouse-management");
                  }}
                >
                  Quản lý Kho
                </div>
              ),
            },
            {
              key: "3",
              icon: <InfoCircleOutlined rev={undefined} />,
              label: (
                <div
                  onClick={() => {
                    router.push("/admin/about");
                  }}
                >
                  Quản lý Thông tin
                </div>
              ),
            },
          ]}
        />
      </Sider>
      <Content
        className="site-layout-background"
        style={{
          padding: 26,
          background: "#ffffff",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default AdminLayout;
