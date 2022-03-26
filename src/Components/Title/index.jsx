import { PageHeader } from 'antd';
import React from "react";

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

const Title = ({title, subtitle}) => {
    return ( 
       <PageHeader
        className="site-page-header"
        title={title}
        breadcrumb={{ routes }}
        subTitle={subtitle}  />
     );
};

export default Title;

