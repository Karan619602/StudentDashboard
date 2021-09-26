import React,{Fragment,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { UpdateProfile,loaduser } from '../actions/authaction'
import {UPDATE_PROFILE_RESET} from '../constants/authconstants'
import { useAlert } from 'react-alert'

import '../../App.css'

 const UPDATE=({history})=>{
     const [obj,setobj]=useState({})
    


const alert= useAlert();
const dispatch= useDispatch();
    const {user} =useSelector(state=>state.auth)
    const {isUpdated} =useSelector(state=>state.update)

    useEffect(()=>{
       
     if(isUpdated){
         dispatch(loaduser())
      history.push('/Profile')
      alert.success('Profile Updated Successfully')
     }
   
   dispatch({
       type:UPDATE_PROFILE_RESET
   })
    },[history,dispatch,isUpdated,alert])

    const submithandler=(e)=>{
     
e.preventDefault();
      dispatch(UpdateProfile(user._id,obj))
    

    }
    
    const handlechange=(e)=>{
     if(e.target.value===''){
        const val=e.target.name
            console.log("val",val);
        
         setobj({...obj,[e.target.name]:user.val})
   
     }
       setobj({...obj,[e.target.name]:e.target.value})
   
   
       }
    return (
        <Fragment>
                       <div className="row wrapper">
		<div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submithandler}    >
            <h1 className="mb-3">Update Profile</h1>

          <div className="form-group">
            <label htmlFor="email_field">Name</label>
            <input type="text" id="name_field" className="form-control" 
             name='username'
                placeholder={user.username}
          
            onChange={(e)=> handlechange(e)}
           />
          </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name='email'
                placeholder={user.email}
            
                             onChange={(e)=> handlechange(e)}
                
              />
            </div>
  
         
            <div className="form-group">
              <label htmlFor="password_field">Bio</label>
              <textarea
              cols="30"
                type="text"
                id="password_field"
                className="form-control"
                name='Bio'
                placeholder={user.Bio}
            
                             onChange={(e)=> handlechange(e)}


              />
            </div> <div className="form-group">
              <label htmlFor="password_field">Interest</label>
              <textarea
               cols="30"
                type="text"
                id="password_field"
                className="form-control"
                name='Interest'
                placeholder={user.Interest}
            
                             onChange={(e)=> handlechange(e)}


              />
            </div>


          

  
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              //disabled={loading?true:false}
            >
              UPDATE
            </button>
          </form>
		  </div>
    </div>
        </Fragment>
    )
}

export default UPDATE