import { Card, List, Radio, Tabs, Typography } from "antd";
import styles from "./index.module.scss";
import ItemList from "@/components/ItemList";
import Banner from "@/components/Banner";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

const listData = [...Array(6).keys()].map(() => ({
  title: "Demo ",
  image:
    "https://i.pinimg.com/474x/1a/1c/48/1a1c48f1ff71fa63576392856953fd59.jpg",
  price: 50000,
}));

const CarSale = () => {
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: any) => {
    // setSize(e.target.value);
  };

  const renderTabs = () => {
    // return (
    // );
  };

  return (
    <>
      <Banner />
      <div className={styles.content}>
        <Tabs
          defaultActiveKey="1"
          size="middle"
          type="card"
          style={{}}
          onChange={onChange}
          tabBarStyle={{
            fontWeight: "bold",
          }}
          items={[
            {
              label: "Mới",
              key: "1",
            },
            {
              label: "Cũ",
              key: "2",
            },
          ]}
        />
        <List
          grid={{ gutter: 26, column: 5 }}
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <ItemList item={item} />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default CarSale;
