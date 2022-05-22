import {  Navigate } from "react-router-dom";
import MakePost from "../Components/MakePost";
import Nav from '../Components/Nav';
import postData  from "../data/postsData";
import PostCard from '../Components/posttCard'
const Dashboard =({user})=>{
   

    return(
        <div>
            <Nav user={user}/>
            <br/>
            <br/>
            {
                user?(
                    <div>
                    <MakePost/>
                    {
                        postData.map((post)=>{
                            return <PostCard post={post}/>
                        })
                    }
                    </div>
                )
                : <Navigate  to='/login' />
            }
           
{console.log(postData)}
            {/* {
                postData.map((post)=>{
                    return <PostCard post={post}/>
                })
            } */}
        </div>
    )
}
export default Dashboard