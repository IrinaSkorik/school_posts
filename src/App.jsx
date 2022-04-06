import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Title from "./Components/Title";
import ListPosts from "./Components/ListPosts";
import Api from "./utils/Api";

const App = () => {
  const [ posts, setPosts ] = useState([]);
  const [ user, setUser ] = useState([]);

  useEffect(() => {
    Promise.all([Api.getAllPosts(), Api.getUserInfo()]).then(
      ([ posts, user]) => {
        setPosts(posts);
        setUser(user);
      }
    );
  }, []);

  const changePostLike = (isLike, id) => {
    Api.changePostLike(isLike, id).then((newPost) => {
      const newPosts = posts.map((el) =>
        el._id === id ? newPost : el
      );
    setPosts(newPosts);
   });
  };

  const deletePost = (id) => {
    Api.deletePost(id).then(() => {
      const newPosts = posts.filter((el) => el._id != id );
      setPosts(newPosts);
   }, (reason) => {
    if(reason.status==403) alert('Нельзя удалить чужую карточку!') 
    else alert(`Ошибка: ${reason.status} ${reason.statusText}`)})
  };

  return (<div>
    <Header ref1_text={"Home"} ref1={"#"}
      ref2_text={"Remix Docx"} ref2={"https://remix.run/docs"}
      ref3_text={"GitHub"} ref3={"https://github.com/IrinaSkorik/school_posts"} />
    <Title title={"Добро пожаловать на нашу волшебную доску сообщений!"}
      subtitle={"Мы в восторге от того, что вы здесь!"} textButton={"Создать пост"} onClick={() => alert("Жмяк!")} />
    <ListPosts data={posts} user={user} onChangePostLike={changePostLike} onDeletePost={deletePost} />
    <Footer text={"©SkorikIrina"} />
  </div>
  );
};

export default App;