import React from "react";
import { Pagination } from 'antd';
import Post from "../Post";
import styles from "./index.modules.css";

const ListPosts = ({ data }) => {
   return ( <>
    <div className={styles.listposts}>
      {data?.map((item) => (
        <Post
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
