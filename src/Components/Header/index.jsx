import React from "react";
import { Divider } from 'antd';

const Header = ({img_logo, ref1_text, ref1, ref2_text, ref2, ref3_text, ref3}) => {
    return ( <>
          <img src={img_logo}></img>
          <a href={ref1}>{ref1_text}</a>
          <a href={ref2}>{ref2_text}</a>
          <a href={ref3}>{ref3_text}</a>
          <Divider/>
          </>
    );
};

export default Header;