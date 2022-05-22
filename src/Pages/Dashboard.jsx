import { Navigate } from "react-router-dom";
import MakePost from "../Components/MakePost";
import Nav from "../Components/Nav";
import Profile from "./Profile";
import PostCard from "../Components/posttCard";

const Dashboard = (props) => {
  console.log("in dashboard");

  const addPostDataHandler = (content) => {
    props.addPost(content);
  };
  return (
    <div className="mt-4">
      <Nav user={props.user} setUser={props.setUser} />
      <br />
      <br />
      {props.user ? (
        <div className="conatainer">
          <MakePost user={props.user} addPostData={addPostDataHandler} />
          {props.postData.map((post, index) => {
            return <PostCard post={post} key={index} user={props.user} />;
          })}
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};
export default Dashboard;
