import { useNavigate } from "react-router-dom";
import Nav from '../Components/Nav'
const Dashboard =()=>{
    const navigate = useNavigate()

    return(
        <div>
            <Nav/>
            Dashboard
        </div>
    )
}
export default Dashboard