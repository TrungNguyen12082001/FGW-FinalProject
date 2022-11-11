import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/OrderDetailed.module.css";

const AdminOrderDetail = ({ handleViewOrderDetail }) => {
  // console.log(handleViewOrderDetail);
  const cart = useSelector((state) => state.cart);
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [foodName, setFoodName] = useState("");
  const [extra, setExtra] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");

  const handleClick = () => {
    createOrder({
      customer,
      address,
      foodName,
      foodQuantity,
      extra,
      total,
      method: 0,
    });
  };

  const retrieveData = () => {
    handleViewOrderDetail().res;
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Name Surname
          </label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetail;
