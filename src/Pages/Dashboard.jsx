import { Navigate } from "react-router-dom";
import MakePost from "../Components/MakePost";
import Nav from "../Components/Nav";

import PostCard from "../Components/posttCard";

const Dashboard = (props) => {
    console.log("in dashboard")
    console.log(props.postData)
    const addPostDataHandler = (content) =>{
        props.addPost(content);
    }
    return (
        <div>
        <Nav user={props.user} />
        <br />
        <br />
        {props.user ? (
            <div>
            <MakePost user={props.user} addPostData={addPostDataHandler} />
            {props.postData.map((post, index) => {
                return <PostCard post={post}  key={index} user={props.user} />;
            })}
            </div>
        ) : (
            <Navigate to="/login" />
        )}

        </div>
    );
};
export default Dashboard;
