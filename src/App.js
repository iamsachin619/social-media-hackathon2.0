import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/login";
import SignUp from "./Pages/Signup";
import Profile from "./Pages/Profile";

import postData from "./data/postsData";

function App() {
  const [user, setUser] = useState(null);
  const [postDataNew, setPostDataNew] = useState(postData);

  const addPost = (content) => {
    let post = {
      username: user.username,
      noOfLikes: Math.floor(Math.random() * 100),
      postContent: content,
      comments: [],
      postImg: null,
      userImg: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 100
      )}.jpg`,
    };
    console.log("iran");
    setPostDataNew((prevPostData) => {
      console.log(prevPostData);
      return [post, ...prevPostData];
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard user={user} postData={postDataNew} addPost={addPost} />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
