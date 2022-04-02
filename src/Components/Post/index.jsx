import { Card } from 'antd';
import React from "react";
import { Avatar, Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

const Post = ({ title, login, tag, createDate, createTime, editDate, editTime, text }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={title} extra={<a href="#">More</a>} style={{ width: 300 }}>
        <div>
          <Avatar icon={<UserOutlined />} />{login}
          <p>{text}</p>
        </div>
        <p>Tags: <Tag>{tag}</Tag></p>
        <Timeline>
          <Timeline.Item>Сообщение создано {createDate}, {createTime}</Timeline.Item>
          <Timeline.Item>Последний раз редактировалось {editDate}, {editTime}</Timeline.Item>
        </Timeline>
      </Card>
    </div>
  )
}

export default Post;