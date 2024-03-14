/* eslint-disable @next/next/no-img-element */
import { Typography } from "antd";
import styles from "./index.module.scss";
import { FC, ReactNode } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

interface ItemBannerProps {
  icon?: ReactNode;
  value?: string | ReactNode;
}

const ItemBanner: FC<ItemBannerProps> = ({ icon, value }) => {
  return (
    <div className={styles.boxItemBanner}>
      <div className={styles.icon}>{icon || null}</div>
      <Typography className={styles.value}>{value}</Typography>
    </div>
  );
};

const Banner = () => {
  return (
    <div className={styles.container}>
      <img
        alt="banner"
        className={styles.imageBanner}
        src="https://t3.ftcdn.net/jpg/04/87/00/24/240_F_487002444_c68D38jVD8KIpDSCQFYvU2lBjBlIoNxo.jpg"
      />
      <div className={styles.boxContent}>
        <Typography className={styles.welcome}>
          Chào mừng bạn đến với Bem
        </Typography>
        <ItemBanner
          value="Tìm Mua Xe"
          icon={<BiRightArrowAlt color="#fff" size={20} />}
        />
        <ItemBanner
          value="Gửi Bán Xe"
          icon={<BiRightArrowAlt color="#fff" size={20} />}
        />
        <ItemBanner
          value="Sửa Chữa/Bảo Dưỡng"
          icon={<BiRightArrowAlt color="#fff" size={20} />}
        />
        <ItemBanner
          value="Tư Vấn"
          icon={<BiRightArrowAlt size={20} color="#fff" />}
        />
      </div>
    </div>
  );
};

export default Banner;
