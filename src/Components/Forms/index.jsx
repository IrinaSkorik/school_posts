import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import styles from "./index.modules.css";

const Form = ({data, onCreatePost, setActive, onUpdatePost, postId}) => {
    const { register, handleSubmit } = useForm( { mode: 'onBlur' } );
  
    const onSubmit = (data, user) => {
      const dataPost = {
          "title": "",
          "tags": [],
          "text": "",
      };
      dataPost.title = data.title;
      dataPost.text = data.text;
      dataPost.tags = data.tags.split(' ');
      
      console.log(dataPost);
      if(postId) { onUpdatePost(postId, dataPost); }
      else { onCreatePost(dataPost) };
      setActive(false);
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Заголовок" {...register("title" , { required:true, minLength:2 })} defaultValue={(data==undefined)?"":data.title} />
        <input type="text" placeholder="Теги"  {...register("tags")} defaultValue={(data==undefined)?"":data.tags} />
        <textarea placeholder="Текст сообщения" rows="10"  {...register("text", { required:true })} defaultValue={(data==undefined)?"":data.text} />
        <input type="submit" />
      </form>
    );
  }

  export default Form;