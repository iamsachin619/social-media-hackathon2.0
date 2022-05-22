import {Link,useLocation} from 'react-router-dom'

const Nav =({user,setUser})=>{

    const location = useLocation();
    console.log(location.pathname);
    return(
        <div>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <Link class="navbar-brand"to="/">
                    <img src="/img/logo.png" height="50"  class="d-inline-block align-top mx-3" alt=""/>
                    
                </Link>
                {
                    user?
                    (
                    <div>
                        <h4 className="text-light mx-3">
                            Welcome, {user.username}!
                            &nbsp;
                            {location.pathname==='/profile'?
                            (<span title='Dashboard'className='mx-3'>
                                <Link to='/dashboard'>
                                <i class="fa-brands fa-flipboard text-white font-size-5 "></i>
                                    
    
                                </Link>
                            </span>)
                            :(<span title='Profile'className='mx-3'>
                                <Link to='/profile'>
                                     
                                    <i class="fa-regular fa-circle-user text-white font-size-5 "></i> 
    
                                </Link>
                            </span>)}
                            
                            &nbsp;
                            <span title='Sign out'className='mx-3' onClick={(e)=>{
                                e.preventDefault()
                                sessionStorage.setItem('username',null)
                                setUser(null)
                                console.log('iran')
                                
                            }}>
                                
                                
                                <i class="fas fa-sign-out-alt text-white"></i>
    
                                
                            </span>
                            
                            
                        </h4>
                        
                    </div>
                    ):   
                     (<h4 className="text-light mx-3">
                        Welcome, Guest!
                    </h4>)
                }
            </nav>
        </div>
    )
}
export default Nav