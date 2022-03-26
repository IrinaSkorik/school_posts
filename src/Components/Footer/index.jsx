import React from "react";
import { Divider } from 'antd';

const Footer = ({text}) => {
    return ( 
     <>
     <Divider/>
     <div className="footer">{text}</div>
     </>
    )
};

export default Footer;