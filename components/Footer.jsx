import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE TRUNG'S FOODS, WELL BAKED SLICE OF FOODS
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            491 Hau Giang
            <br /> HCM city
            <br />
            +84 865570831
          </p>
          <p className={styles.text}>
            91 Hau Giang
            <br /> HCM city
            <br />
            +84 45664562
          </p>
          <p className={styles.text}>
            60 Cong hoa
            <br /> HCM city
            <br />
            +84 12344231
          </p>
          <p className={styles.text}>
            45 Nguyen Luong Bang
            <br /> BMT city
            <br />
            +84 865570831
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
