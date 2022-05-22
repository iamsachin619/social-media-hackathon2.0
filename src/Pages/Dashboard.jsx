import {  Navigate } from "react-router-dom";
import Nav from '../Components/Nav'
const Dashboard =({user})=>{
    

    return(
        <div>
            <Nav user={user}/>
            {
                user?(<h2>Dashboard!</h2>): <Navigate  to='/login' />
            }
            Dashboard
        </div>
    )
}
export default Dashboard