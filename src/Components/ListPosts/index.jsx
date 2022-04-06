import React from "react";
import { Pagination } from 'antd';
import Post from "../Post";
import styles from "./index.modules.css";

const ListPosts = ({ data, user, onChangePostLike, onDeletePost }) => {
   return ( <>
    <div className={styles.listposts}>
      {data?.map((item) => (
        <Post
          user={user}
          onChangePostLike={onChangePostLike}
          onDeletePost={onDeletePost}
          key={item._id}
          {...item}
        />
      ))}
    </div>
     <Pagination defaultCurrent={1} total={10} className={styles.pagination}/>
    </> 
  )
}

export default ListPosts;
