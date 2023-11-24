import { Typography } from "antd";
import styles from "./index.module.scss";
import { useMemo } from "react";
import GoogleMapReact from "google-map-react";
import { useRequest } from "ahooks";
import { requestGetAbout } from "@/services/admin/about";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const About = () => {
  const screenSize = useMemo(() => {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }, []);

  const getAboutInfo = useRequest(requestGetAbout, {
    debounceWait: 250,
  });

  return (
    <div
      className={styles.aboutPage}
      style={{ height: screenSize.height * 0.65 }}
    >
      <div className={styles.boxLeft}>
        <h2 className={styles.about}>Thông tin liên hệ:</h2>
        <div>
          <Typography className={styles.cty}>
            {getAboutInfo.data?.data?.company_name?.toLocaleUpperCase()}
          </Typography>
          <div className={styles.boxPhoneEmail}>
            <Typography className={styles.textBold}>Trụ sở:</Typography>
            <Typography>{getAboutInfo.data?.data?.address}</Typography>
          </div>
          <div className={styles.boxAbout}>
            <div className={styles.boxPhoneEmail}>
              <Typography className={styles.textBold}>Hotline:</Typography>
              <Typography>{getAboutInfo.data?.data?.phone_number}</Typography>
            </div>
            <Typography className={styles.dot}>-</Typography>
            <div className={styles.boxPhoneEmail}>
              <Typography className={styles.textBold}>Email:</Typography>
              <Typography>{getAboutInfo.data?.data?.email}</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.boxRight}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 20.996693,
            lng: 105.8111516,
          }}
          defaultZoom={11}
        >
          <AnyReactComponent text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default About;
