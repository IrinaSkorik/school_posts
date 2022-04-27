import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import styles from "./index.modules.css";

const Form = ({data, onCreatePost, setActive, titleValue}) => {
  // const [ titleDefault, setTitleDefault ] = useState(title);

  // useEffect(() => {
  //     if (data !== undefined) {
  //       setTitleDefault(data.title);
  //     }
  // }, []);

    const { register, handleSubmit } = useForm( { mode: 'onBlur' } );
  
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

    // value={(data==undefined)?"":data.title} 
    // value={(data==undefined)?"":data.tags} 
    // value={(data==undefined)?"":data.text}

     return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Заголовок" {...register("title" , { required:true, minLength:2, value:titleValue })} />
        <input type="text" placeholder="Теги"  {...register("tags")} />
        <textarea placeholder="Текст сообщения" rows="10"  {...register("text", { required:true })} />
        <input type="submit" />
      </form>
    );
  }

  export default Form;