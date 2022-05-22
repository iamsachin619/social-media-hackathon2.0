import { useState } from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom';
import userLoginData from '../data/loginUserData';

const SignUp = props => { 
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const [formData, setFormData] = useState();
    const signUpHandler = (e) => {
        e.preventDefault();
        let userData = {
            userName: username,
            password: pwd,
            email: email
        }
        setFormData(userData);
        console.log(formData)
    }
 
    return(
        <div className='card center'>
            <h3 className="App">Join Skittles today</h3>
            <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" class="form-control form-control-sm" required placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i className="fa fa-key" aria-hidden="true"></i></span>
                    </div>
                    <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password" required
                    onChange={(e)=>{
                        setPwd(e.target.value)
                    }}
                    />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    </div>
                    <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" placeholder="Email" required
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                </div>
                <div className='App'>
                    <button type="submit" className="btn btn-primary" onClick={signUpHandler}>Sign up</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp