import React, { useState} from "react";
import { useForm } from 'react-hook-form';
import styles from "./index.modules.css";

const Form = ({onCreatePost, setActive}) => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
      const dataPost = {
          "title": "",
          "tags": [],
          "text": "",
      };
      dataPost.title = data.title;
      dataPost.text = data.text;
      dataPost.tags = data.tags.split(' ');
      onCreatePost(dataPost);
      setActive(false);
    }

     return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title" , { required:true, minLength:2 })} placeholder="Заголовок"  />
        <input {...register("tags")} placeholder="Теги" />
        <textarea {...register("text", { required:true })} placeholder="Текст сообщения" rows="10" />
        <input type="submit" />
      </form>
    );
  }

  export default Form;