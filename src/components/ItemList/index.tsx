import { Image, Typography } from "antd";
import { FC } from "react";
import styles from "./index.module.scss";
import { formatPrice } from "@/utils/format";

interface ItemListProps {
  item: {
    title?: string;
    image?: string;
    price?: number;
  };
}

const ItemList: FC<ItemListProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <Image width={"100%"} alt={item?.image} src={item?.image} />
      <Typography className={styles.title}>{item?.title}</Typography>
      <Typography className={styles.price}>{`Giá từ: ${formatPrice(
        item?.price
      )}`}</Typography>
    </div>
  );
};

export default ItemList;
