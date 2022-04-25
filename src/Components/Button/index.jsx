import React from "react";
import styles from "./index.modules.css";

const Button = ({ text, onClick }) => {
    return <button className={styles.button} onClick={onClick}>{text}</button>
};

export default Button;