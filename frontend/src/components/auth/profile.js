import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'

export const Profile=({history})=>{
    const {user,isAuthenicated}=useSelector(state=>state.auth)
    useEffect(()=>{
     if(!isAuthenicated){
 history.push("/Signup")
     }
    },[isAuthenicated,history])
   
    return(
        <div className="col-12 col-md-5">
            <h1 className="head"> My Profile</h1>
        <h3>Full Name</h3>
        <h5>{user.username}</h5>
<hr/>
        <h3>Email Address</h3>
        <h5>{user.email}</h5>
        <hr/>

        <h3>Your Bio</h3>
        <h5>{user.Bio}</h5>  
        <hr/>

        <h3>Interest</h3>
        <h5>{user.Interest}</h5>
        </div>

        
    )
}

  
