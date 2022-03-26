import React from "react";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Post from "./Components/Post";

const App = () => {
    return ( <>
             <Header ref1_text={"Home"} ref1={"/"}
               ref2_text={"Remix Docx"} ref2={"https://remix.run/docs"}
               ref3_text={"GitHub"} ref3={"https://github.com/IrinaSkorik/school_posts"}
               img_logo=""/>
            <Title title={"Добро пожаловать на нашу волшебную доску сообщений!"} 
              subtitle={"Мы в восторге от того, что вы здесь!"} 
               />
             <Button text={"Create post"}/> 
             <Post title="title post" nameUser={"ghtr@mail.ru"}/>
             <Footer text={"©SkorikIrina"}/>
             </>
           );
 
};

export default App;