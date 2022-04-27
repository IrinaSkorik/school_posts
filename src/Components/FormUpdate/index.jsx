import React, { useState, useEffect } from "react";
import styles from "./index.modules.css";

const FormUpdate = ({data, onUpdatePost, setActive}) => {
    const [post, setPost] = useState({});

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (data) => {
      const dataPost = {
          "title": "",
          "tags": [],
          "text": "",
      };
      dataPost.title = data.title;
      dataPost.text = data.text;
      dataPost.tags = data.tags.split(' ');
      onUpdatePost(id, dataPost);
      setActive(false);
    }

     return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Заголовок" name="title" value={data.title} onChange={handleChange} />
        <input type="text" placeholder="Теги"  name="tags" value={data.tags} onChange={handleChange} />
        <textarea placeholder="Текст сообщения" rows="10"  name="text" value={data.text} onChange={handleChange} />
        <input type="submit" />
      </form>
    );
  }

  export default FormUpdate;