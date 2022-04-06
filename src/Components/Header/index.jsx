import React from "react";
import { Space, Typography, Divider, Image } from 'antd';
import styles from "./index.modules.css";

const { Text, Link } = Typography;

const Header = ({ ref1_text, ref1, ref2_text, ref2, ref3_text, ref3 }) => {
    return (<>
        <header className={styles.header}>
            <Image width={50} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
            {/* <img src="" alt="Remix" /> */}
            <Space split={<Divider type="vertical" />}>
                <Link href={ref1} target="_blank">{ref1_text}</Link>
                <Link href={ref2} target="_blank">{ref2_text}</Link>
                <Link href={ref3} target="_blank">{ref3_text}</Link>
            </Space>
        </header>
        <Divider />
    </>
    );
};

export default Header;