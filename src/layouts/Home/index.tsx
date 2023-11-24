import Banner from "@/components/Banner";
import styles from "./index.module.scss";
import { List, Typography } from "antd";
import ItemList from "@/components/ItemList";

const listData = [...Array(6).keys()].map(() => ({
  title: "Demo ",
  image:
    "https://i.pinimg.com/474x/1a/1c/48/1a1c48f1ff71fa63576392856953fd59.jpg",
  price: 50000,
}));

const Home = () => {
  return (
    <>
      <Banner />
      <Typography className={styles.labelTopProduct}>
        TOP SẢN PHẨM HOT NHẤT TUẦN
      </Typography>
      <div className={styles.line} />
      <div className={styles.homePage}>
        <List
          grid={{ gutter: 26, column: 5 }}
          dataSource={listData.slice(0, 5)}
          renderItem={(item) => (
            <List.Item>
              <ItemList item={item} />
            </List.Item>
          )}
        />
      </div>
      <Typography className={styles.labelTopProduct}>
        SẢN PHẨM CÓ SẴN TRONG KHO
      </Typography>
      <div className={styles.line} />
      <div className={styles.homePage}>
        <List
          grid={{ gutter: 26, column: 5 }}
          dataSource={listData.slice(0, 5)}
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

export default Home;
