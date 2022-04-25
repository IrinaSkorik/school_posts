import Title from "../../Components/Title";
import ListPosts from "../../Components/ListPosts";
import React,{ useState } from "react";
import Modal from "../../Components/Modal";
import Form from "../../Components/Forms";

const PageAllPost = ({posts, user, onChangePostLike, onDeletePost, onCreatePost}) => {
  const [ modalFormOpen, setModal ] = useState(false);

  return (<div>
      <Title title={"Добро пожаловать на нашу волшебную доску сообщений!"}
      subtitle={"Мы в восторге от того, что вы здесь!"} textButton={"Создать пост"} onClick={() => setModal(true)} />
      <Modal active={modalFormOpen} setActive={setModal}><Form onCreatePost={onCreatePost} setActive={setModal}/></Modal>
      <ListPosts data={posts} user={user} onChangePostLike={onChangePostLike} onDeletePost={onDeletePost} onCreatePost={onCreatePost} />
  </div>
  );
};

export default PageAllPost;