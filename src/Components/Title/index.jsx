import styles from "./index.modules.css";
import { PageHeader } from 'antd';
import React from "react";
import Button from '../Button';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Home',
  },
  {
    path: 'first',
    breadcrumbName: 'All post',
  }
];

const Title = ({ title, subtitle, textButton, onClick }) => {
  return (<div className={styles.title}>
    <PageHeader
      className="site-page-header"
      title={title}
      breadcrumb={{ routes }}
      subTitle={subtitle} />
    <Button text={textButton} onClick={onClick} />
  </div>
  );
};

export default Title;

