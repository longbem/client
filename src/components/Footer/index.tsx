import React, { FC, ReactNode } from "react";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { Col, Row, Typography, Layout } from "antd";
import styles from "./index.module.scss";

interface ItemFooterProps {
  icon?: ReactNode;
  value?: string | ReactNode;
}

const ItemFooter: FC<ItemFooterProps> = ({ icon, value }) => {
  return (
    <div className={styles.boxItemFooter}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <Typography className={styles.value}>{value}</Typography>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Layout>
        <Row wrap={true} className={styles.boxFooter}>
          <Col flex={1}>
            <div className={styles.columFooter}>
              <Typography className={styles.labelFooter}>BEM</Typography>
              <ItemFooter
                icon={<MdOutlineLocationOn color="#ffffff" size={16} />}
                value="Hà Đông, Hà Nội"
              />
              <ItemFooter
                icon={<MdOutlineEmail color="#ffffff" />}
                value="bem@gmail.com"
              />
              <ItemFooter
                icon={<BsTelephone color="#ffffff" />}
                value="0971.000.997"
              />
            </div>
          </Col>
          <Col flex={1}>
            <div className={styles.columFooter}>
              <Typography className={styles.labelFooter}>Thông tin</Typography>
              <ItemFooter value="Tìm Mua Xe" />
              <ItemFooter value="Gửi Bán Xe" />
              <ItemFooter value="Sửa Xe" />
            </div>
          </Col>
          <Col flex={1}>
            <div className={styles.columFooter}>
              <Typography className={styles.labelFooter}>Social</Typography>
              <div className={styles.boxSocial}>
                <BsFacebook color="#2079f6" size={22} />
                <AiFillYoutube color="#e73030" size={30} />
                <AiOutlineTwitter color="#2079f6" size={25} />
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.boxCopyFooter}>
          <Typography className={styles.copy}>
            Copyright © 2023 Long Bem
          </Typography>
        </div>
      </Layout>
    </div>
  );
};
export default Footer;
