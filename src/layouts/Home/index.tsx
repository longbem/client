import Banner from "@/components/Banner";
import styles from "./index.module.scss";
import { Button, List, Typography, Collapse } from "antd";
import ItemList from "@/components/ItemList";
const Panel = Collapse.Panel;

const listData = [...Array(6).keys()].map(() => ({
  title: "Demo ",
  image:
    "https://i.pinimg.com/474x/1a/1c/48/1a1c48f1ff71fa63576392856953fd59.jpg",
  price: 50000,
}));

const text1 =
  "Garage với đội ngũ thợ dày dặn kinh nghiệm, được đào tạo chuyên sâu và kinh nghiệm lâu năm, trang bị máy móc và thiết bị hiện đại. Với quy trình chuyên nghiệp, các kỹ thuật viên của Garage sẽ xử lý mọi vấn đề về ô tô một cách nhanh chóng nhất.";
const Home = () => {
  return (
    <>
      <Banner />
      <div></div>
      <div className={styles.homeAboutGara}>
        <Typography className={styles.labelAboutGara}>
          VỀ THÔNG TIN GARA
        </Typography>
        <div className={styles.boxStringAboutGara}>
          <Typography className={styles.stringAboutGara}>{text1}</Typography>
          <Button className={styles.btnSeeAll}>Xem thêm</Button>
        </div>
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
      <Typography className={styles.labelTopProduct}>
        QUY TRÌNH SỬA CHỮA TẠI GARAGE
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
        QUY TRÌNH SỬA CHỮA TẠI GARAGE
      </Typography>
      <div className={styles.line} />
      <div className={styles.homePage}>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel
            header="This is panel header 1"
            key="1"
            className={styles.customPanelStyle}
          >
            <p>{text1}</p>
          </Panel>
          <Panel
            header="This is panel header 2"
            key="2"
            className={styles.customPanelStyle}
          >
            <p>{text1}</p>
          </Panel>
          <Panel
            header="This is panel header 3"
            key="3"
            className={styles.customPanelStyle}
          >
            <p>{text1}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default Home;
