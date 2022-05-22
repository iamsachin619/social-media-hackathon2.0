import {  Navigate } from "react-router-dom";
import MakePost from "../Components/MakePost";
import Nav from '../Components/Nav';

import PostCard from '../Components/posttCard';

const Dashboard =({user, addPost,postDataNew})=>{
   

    return(
        <div>
            <Nav user={user}/>
            <br/>
            <br/>
            {
                user?(
                    <div>
                    <MakePost user={user} addPost={addPost}/>
                    {
                        postDataNew.map((post)=>{
                            return <PostCard post={post} user={user}/>
                        })
                    }
                    </div>
                )
                : <Navigate  to='/login' />
            }
           

            {/* {
                postData.map((post)=>{
                    return <PostCard post={post}/>
                })
            } */}
        </div>
    )
}
export default Dashboard