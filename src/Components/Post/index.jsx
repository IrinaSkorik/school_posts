import { Card } from 'antd';
import React from "react";
import { Avatar, Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { LikeOutlined, LikeFilled, LikeTwoTone, DeleteTwoTone } from '@ant-design/icons';
import styles from "./index.modules.css";

const Post = ({ _id, author, title, tags, created_at, updated_at, text, likes, user, onChangePostLike, onDeletePost }) => {

  const dateCreatedOb = new Date(Date.parse(created_at));
  const dateCreated = `${dateCreatedOb.toLocaleDateString()}, ${dateCreatedOb.toLocaleTimeString()}`;
  const dateUpdatedOb = new Date(Date.parse(updated_at));
  const dateUpdated  = `${dateUpdatedOb.toLocaleDateString()}, ${dateUpdatedOb.toLocaleTimeString()}`;

  const isFavourite = likes.some((el) => el === user._id);

  const ValueLike = ({likes, isFavourite, onClick}) => {
    if  (isFavourite) { return (<LikeTwoTone twoToneColor="#FF0000" onClick={onClick} />) }
    else if (likes.length > 0) { return (<LikeFilled onClick={onClick} />) }
    else { return (<LikeOutlined onClick={onClick} />) }
  };

  const handleClick = (e) => {
    e.preventDefault();
    onChangePostLike(!isFavourite, _id);
  };

  const handleClickDelete=(e) => {
    e.preventDefault();
    const result = confirm(`Вы уверены, что хотите удалить пост?`);
    if (result) onDeletePost(_id);
  }

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
        <div className={styles.actions}>
          <div>
            <ValueLike likes={likes} isFavourite={isFavourite} onClick={handleClick} /> {likes.length}
          </div>
          <DeleteTwoTone twoToneColor="#FF0000" onClick={handleClickDelete}/>
        </div>
      </Card>
  )
}

export default Post;