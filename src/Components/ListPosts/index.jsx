import { Card, Col, Row, Space } from 'antd';
import React from "react";
import { Pagination } from 'antd';
import Post from "../Post";
import styles from "./index.modules.css";

const ListPosts = ({ data }) => {
  return (
    <div className={styles.listposts}>
      <div className="site-card-wrapper">
        <Space size={[16, 16]} wrap>
          <Row gutter={16}>
            <Col span={30}>
              <Post title="title post" login={"ghtr@mail1.ru"} tag={"тута тег"} />
            </Col>
            <Col span={30}>
              <Post title="title post1" login={"ghtr@mail2.ru"} />
            </Col>
            <Col span={30}>
              <Post title="title post2" login={"ghtr@mail3.ru"} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={30}>
              <Post title="title post3" login={"ghtr@mail1.ru"} />
            </Col>
            <Col span={30}>
              <Post title="title post4" login={"ghtr@mail2.ru"} />
            </Col>
            <Col span={30}>
              <Post title="title post5" login={"ghtr@mail3.ru"} />
            </Col>
          </Row>
        </Space>
        <Pagination defaultCurrent={1} total={10} />
      </div>
    </div>
  )
}

export default ListPosts;
