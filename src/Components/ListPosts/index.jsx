import React,  { useState } from "react";
import { Pagination } from 'antd';
import Post from "../Post";
import styles from "./index.modules.css";

const ListPosts = ({ data, user, onChangePostLike, onDeletePost }) => {
  const numEachPage = 9;

  const [ minValue, setminValue ] = useState(0);
  const [ maxValue, setmaxValue ] = useState(9);

  const handleChange = (value) => {
      setminValue((value - 1) * numEachPage),
      setmaxValue(value * numEachPage)
  };
  
  return ( <>
    <div className={styles.listposts}>
      {data.length > 0 && 
      data?.slice(minValue, maxValue).map((item) => (
        <Post
          user={user}
          onChangePostLike={onChangePostLike}
          onDeletePost={onDeletePost}
          key={item._id}
          {...item}
        />
      ))}
    </div>
     <Pagination defaultCurrent={1} 
      defaultPageSize={numEachPage} 
      onChange={handleChange}
      total={data.length}/>
    </> 
  )
}

export default ListPosts;
