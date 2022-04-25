import React, { useEffect, useState } from "react";
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Space } from 'antd';
import { Tag } from 'antd';
import styles from "./index.modules.css";
import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
import Api from "../../utils/Api";
import { Link } from "react-router-dom";

const PageDetailPost = ( { user } ) => { 
    const [post, setPost] = useState({});
    const [error, setError] = useState("");
    const {postId} = useParams();

    useEffect(() => {
        Api
          .getPost(postId)
          .then((data) => {
            setPost(data);
          })
          .catch((err) => setError("Поста не существует"));
      }, []);  

    const dateCreatedOb = new Date(Date.parse(post.created_at));
    const dateCreated = `${dateCreatedOb.toLocaleDateString()}, ${dateCreatedOb.toLocaleTimeString()}`;
    const dateUpdatedOb = new Date(Date.parse(post.updated_at));
    const dateUpdated  = `${dateUpdatedOb.toLocaleDateString()}, ${dateUpdatedOb.toLocaleTimeString()}`;

    return ( <div className={styles.post}>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/">All posts</Link>
            </Breadcrumb.Item>
        </Breadcrumb>
        <Space />
        <div className={styles.title}>
            <h1>{post.title}</h1>
        </div>
        <p><Avatar icon={<UserOutlined />} /><b>{(post.author == undefined)?"":post.author.email}</b></p>
        <Divider dashed />
        <p>Сообщение создано: {dateCreated}</p>
        <p>Последний раз редактировалось: {dateUpdated}</p>
        <Divider dashed />
        <p>{post.text}</p>    
        <Divider dashed />
        <p>Tags: {(post.tags == undefined)?"":post.tags.map((elem, index) => (
            <Tag key={index}>{elem}</Tag>
        ))}</p>
        <Button text="Редактировать" />
        </div>
)
}

export default PageDetailPost;