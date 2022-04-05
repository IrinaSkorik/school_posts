import { Card } from 'antd';
import React from "react";
import { Avatar, Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

const Post = ({ _id, author, title, tags, created_at, updated_at, text }) => {

  const dateCreatedOb = new Date(Date.parse(created_at));
  const dateCreated = `${dateCreatedOb.toLocaleDateString()}, ${dateCreatedOb.toLocaleTimeString()}`;
  const dateUpdatedOb = new Date(Date.parse(updated_at));
  const dateUpdated  = `${dateUpdatedOb.toLocaleDateString()}, ${dateUpdatedOb.toLocaleTimeString()}`;

  return (
      <Card title={title} extra={<a href="#">More</a>} style={{ width: 400 }}>
        <div>
          <Avatar icon={<UserOutlined />} /><b>{author.email}</b>
          <p>{text}</p>
        </div>
        <p>Tags: {tags.map((elem, index) => (
            <Tag key={index}>{elem}</Tag>
          ))} </p>
        <Timeline>
          <Timeline.Item>Сообщение создано: {dateCreated}</Timeline.Item>
          <Timeline.Item>Последний раз редактировалось: {dateUpdated}</Timeline.Item>
        </Timeline>
      </Card>
  )
}

export default Post;