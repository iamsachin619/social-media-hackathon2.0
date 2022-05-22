import userData from '../data/usersData'
import { Navigate, useNavigate } from 'react-router-dom';

const Profile =({})=>{
    const fakeData = userData[0];
    console.log(fakeData)
    return(
        <div>
           {/* profile page */}
           {
               
                    <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className=''>
                                <img src={fakeData.picture.large} alt="" className='rounded-circle mx-auto'/>
                                {/* <h3>{user.username}</h3> */}
                                {/* <p>Name: {user.username}</p> */}
                                <h3 className='mx-auto'>{fakeData.name.title}.{fakeData.name.first} {fakeData.name.last}</h3>

                                </div>
                                
                                <p><strong>Email: </strong>{fakeData.email}</p>
                                <p><strong>Location : </strong>
                                    {fakeData.location.street.number} {fakeData.location.street.name}, {fakeData.location.city}, {fakeData.location.state} {fakeData.location.postcode}
                                </p>
                                <p><strong>Phone:</strong> {fakeData.phone}</p>
                                <p><strong>Cell: </strong>{fakeData.cell}</p>
                                <p><strong>Date of Birth:</strong> {fakeData.dob.date.substring(0,10)}</p>
                                <p><strong>Nationality:</strong>{fakeData.nat}</p>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
               
           }
              
        </div>
    )
}
export default Profile