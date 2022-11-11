import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/OrderDetailed.module.css";

const OrderDetail = ({ total, createOrder }) => {
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
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay 12$ after delivery</h1>
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
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Phone Number
          </label>
          <input
            placeholder="+84 867666899"
            type="number"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Address
          </label>
          <input
            placeholder="Hau Giang st"
            type="text"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {cart.products.map((product) => (
          <div className={styles.wrapper} key={product._id}>
            <div className={styles.item}>
              <label htmlFor="" className={styles.label}>
                Order Foods
              </label>
              <input
                type="text"
                className={styles.input}
                value={product.title}
                onChange={(e) => setFoodName(e.target.value)}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="" className={styles.label}>
                Extra Ingredients
              </label>
              <span htmlFor="">
                {product.extras.map((extra) => (
                  <input
                    type="text"
                    className={styles.input}
                    value={extra.text}
                    onChange={(e) => setExtra(e.target.value)}
                  />
                ))}
              </span>
            </div>
            <div className={styles.item}>
              <label htmlFor="" className={styles.label}>
                Quantity
              </label>
              <input
                type="text"
                className={styles.input}
                value={product.quantity}
                onChange={(e) => setFoodQuantity(e.target.value)}
              />
            </div>
          </div>
        ))}
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
