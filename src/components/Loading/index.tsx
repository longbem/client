import { FC } from "react";
import { Spin } from "antd";
import styles from "./index.module.scss";

type LoadingProps = {
  loading: boolean;
};

const Loading: FC<LoadingProps> = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className={styles.boxLoading}>
          <div className={styles.loading}>
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
