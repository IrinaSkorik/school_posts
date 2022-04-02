import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Title from "./Components/Title";
import ListPosts from "./Components/ListPosts";
import Api from "./utils/Api";
// import { useEffect } from "react/cjs/react.production.min";
import postData from "./posts";

const App = () => {

  useEffect(()=>{ 
    Api.getAllPosts().then(data=>console.log(data))
  });

  return (<div>
    <Header ref1_text={"Home"} ref1={"#"}
      ref2_text={"Remix Docx"} ref2={"https://remix.run/docs"}
      ref3_text={"GitHub"} ref3={"https://github.com/IrinaSkorik/school_posts"} />
    <Title title={"Добро пожаловать на нашу волшебную доску сообщений!"}
      subtitle={"Мы в восторге от того, что вы здесь!"} textButton={"Создать пост"} onClick={() => alert("Жмяк!")} />
    <ListPosts />
    <Footer text={"©SkorikIrina"} />
  </div>
  );
};

export default App;