import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Title from "./Components/Title";
import ListPosts from "./Components/ListPosts";
import Api from "./utils/Api";

const App = () => {
  const [ dataPosts, setPosts ] = useState([]);
  const [ user, setUser ] = useState([]);
  
  useEffect(()=>{ 
    Api.getAllPosts().then(data=>setPosts(data))
  }, []);

  // useEffect(()=>{ 
  //   Api.getUserInfo().then(data=>SetUser(data))
  // });

  return (<div>
    <Header ref1_text={"Home"} ref1={"#"}
      ref2_text={"Remix Docx"} ref2={"https://remix.run/docs"}
      ref3_text={"GitHub"} ref3={"https://github.com/IrinaSkorik/school_posts"} />
    <Title title={"Добро пожаловать на нашу волшебную доску сообщений!"}
      subtitle={"Мы в восторге от того, что вы здесь!"} textButton={"Создать пост"} onClick={() => alert("Жмяк!")} />
    <ListPosts data={dataPosts}/>
    <Footer text={"©SkorikIrina"} />
  </div>
  );
};

export default App;