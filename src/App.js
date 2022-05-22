import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/login";
import SignUp from "./Pages/Signup";
import Profile from "./Pages/Profile";

import postData from "./data/postsData";
import userLoginData from "./data/loginUserData";
function App() {
  let data = sessionStorage.getItem("username");
  console.log(data)
  const [user, setUser] = useState(JSON.parse(data));
  const [postDataNew, setPostDataNew] = useState(postData);
  const [userList,setUserList] = useState(userLoginData);

  const addUser = (user)=>{
    setUserList((prevData)=>{
      return [...prevData,user]
    })
  }

  const addPost = (content) => {
    let post = {
      username: user.username,
      noOfLikes: Math.floor(Math.random() * 100),
      postContent: content,
      postImg: null,
      userImg: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 100
      )}.jpg`,
    };
    setPostDataNew((prevPostData) => {
      return [post, ...prevPostData];
    });
    console.log(postDataNew);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard user={user} postData={postDataNew} addPost={addPost} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard user={user} postData={postDataNew} addPost={addPost}  setUser={setUser} />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
