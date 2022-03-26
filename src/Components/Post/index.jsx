import { Card } from 'antd';
import React from "react";
import { Avatar, Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Post = ({title, login, tag, createDate, createTime, editDate, editTime, text}) => {
    return (
  <div className="site-card-border-less-wrapper">
    <Card title={title} style={{ width: 300 }}>
      <p><Avatar icon={<UserOutlined />} />{login}</p>
      <p>{text}</p>
      <p>Tags: {tag}</p>
      <Timeline>
        <Timeline.Item>Сообщение создано {createDate}, {createTime}</Timeline.Item>
        <Timeline.Item>Последний раз редактировалось {editDate}, {editTime}</Timeline.Item>
     </Timeline>,
    </Card>
  </div>
    )
 }

 export default Post;