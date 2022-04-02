import React from "react";
import { Divider } from 'antd';
import styles from "./index.modules.css";

const Footer = ({ text }) => {
    return (
        <footer>
            <Divider />
            <div className={styles.footer}>
                <p>{text}</p>
            </div>
        </footer>
    )
};

export default Footer;