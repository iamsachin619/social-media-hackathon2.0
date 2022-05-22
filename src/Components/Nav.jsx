const Nav =({user})=>{
 
    return(
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="/img/logo.png" height="50"  class="d-inline-block align-top mx-3" alt=""/>
                    
                </a>
                {
                    user?
                    (<h4 className="text-light mx-3">
                        Welcome, User!
                    </h4>):   
                     (<h4 className="text-light mx-3">
                        Welcome, Guest!
                    </h4>)
                }
            </nav>
        </div>
    )
}
export default Nav