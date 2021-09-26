import React from 'react'
import { Link,Redirect } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logoutuser } from './components/actions/authaction'
export const Home=()=>{
    const {isAuthenicated}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const handlechange=()=>{
     dispatch(logoutuser())
    }
    return(
        <div>
            {/* {isAuthenicated?<Redirect to="/Profile"/>:<Redirect to="/Signup"/>} */}
            <Link to="/Signup" >Signup</Link>
            <Link to="/" onClick={handlechange}>Logout</Link>
        </div>
    )
}
