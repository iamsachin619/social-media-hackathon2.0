import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css';
import userLoginData from '../data/loginUserData';
const Login = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()
    const [err, setErr] = useState(false) 

    return(
            <div className='card my-auto'>
            <h3 className="App">Sign in to Post</h3>
            <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" class="form-control form-control-sm" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></span>
                    </div>
                    <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password"
                    onChange={(e)=>{
                        setPwd(e.target.value)
                    }}
                    />
                </div>
                <button type="submit" className="btn btn-primary pull-center" onClick={(e)=>{
                    
                    e.preventDefault()
                    console.log(userLoginData)
                    for(let u of userLoginData){
                        if(u.username == username && u.pwd ==pwd){
                            setUser({username,pwd})
                            
                             
                            navigate('/dashboard')
                        }
                    }
                    
                }}>Login</button>
            </form>

            {
                err?(<div>Invalid User</div>):(<div></div>)
            }
            <span className='App'>Don't have an account?<Link to='/signup'>SignUp</Link></span>
        </div>
    )
}
export default Login