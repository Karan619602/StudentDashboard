import React, { Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Navbar } from 'react-bootstrap'

import { logoutuser } from './components/actions/authaction'


import './App.css'

const Header = () => {
    const dispatch = useDispatch();
const alert= useAlert()
    const {isAuthenicated,user,loading}=useSelector(state=>state.auth)
  
    const logoutHandler = () => {
        dispatch(logoutuser());
   alert.success('logout successfully')
    }

    return (
        <Fragment>
          
                <Navbar bg="light" expand="lg" className="nvb">

               
                  

                    {user ? (
                        <div className="ml-4 dropdown d-inline">

                           

                               
                                <Link className="btn ml-4" to="/MyCourses">My Courses</Link>
                                <Link className="btn ml-4" to="/Profile">Profile</Link>
                                <Link className="btn ml-4 text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>
                                <Link className="btn ml-4" to="/UpdateProfile">Edit</Link>
                                <Link className="btn ml-8 row-3" to="/Courses">Courses</Link>


                            </div>


                       
                      
                          ) : !loading &&( <div>
                                {isAuthenicated?<Redirect to="/Profile"/>:<Redirect to="/Signup"/>}
                               <Link to="/login" className="btn ml-4" >Login</Link>
                    
                    <Link to="/Signup" className="btn ml-4" >Signup</Link> 
                    <Link className="btn ml-8 row-3" to="/Courses">Courses</Link>
                    </div>)}

               
                </Navbar> 

                    
        </Fragment>
    )

}

export default Header