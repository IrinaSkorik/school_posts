import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Api from "./utils/Api";
import PageAllPost from "./pages/PageAllPost/PageAllPost";
import PageDetailPost from "./pages/PageDetailPost";
import { Routes, Route } from "react-router-dom";

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

  const createPost = (data) => {
    Api.createPost(data).then((newPost) => {
      posts.push(newPost);
  });
  };

  // const updatePost = (id, data) => {
  //   Api.updatePost(id, data).then((newPost) => {
  //     const newPosts = posts.map((el) =>
  //       el._id === id ? newPost : el
  //     );
  //    setPosts(newPosts);
  // });
  // };

  const deletePost = (id) => {
    Api.deletePost(id).then(() => {
      const newPosts = posts.filter((el) => el._id != id );
      setPosts(newPosts);
   });
  };

  return (<div>
    <Header ref1_text={"Home"} ref1={"#"}
      ref2_text={"Remix Docx"} ref2={"https://remix.run/docs"}
      ref3_text={"GitHub"} ref3={"https://github.com/IrinaSkorik/school_posts"} />
        <Routes>
          <Route path="/" element={<PageAllPost posts={posts} user={user} onChangePostLike={changePostLike} onDeletePost={deletePost} onCreatePost={createPost}/>} />
          <Route path="/post/:postId" element={<PageDetailPost user={user} />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    <Footer text={"©SkorikIrina"} />
  </div>
  );
};

export default App;