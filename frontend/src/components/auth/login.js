import React,{Fragment,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../actions/authaction'
import '../../App.css'

export const Login=({history})=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    

//const alert= useAlert();
const dispatch= useDispatch();
    const {isAuthenicated,error} =useSelector(state=>state.auth)
    useEffect(()=>{
     if(isAuthenicated){
      history.push('/Profile')
     }
   
     if(error){
    //   alert.error(error)
      //   dispatch(clearerrors());
         console.log(error);
     }
    },[history,dispatch,error,isAuthenicated])

    const submithandler=(e)=>{
        e.preventDefault();
  
      dispatch(login(email,password))
     
     setemail('')
     setpassword('')
    }
    
    // const onChange=(e)=>{
     
    //    setuser({...user,[e.target.name]:e.target.value})
   
   
    //    }
    return (
        <Fragment>
                       <div className="row wrapper">
		<div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submithandler}    >
            <h1 className="mb-3">Login</h1>

        
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name='email'
              value={email}
              onChange={(e)=>setemail(e.target.value)}
                
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name='password'
              value={password}
              onChange={(e)=>setpassword(e.target.value)}


              />
            </div>
          
          

  
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              //disabled={loading?true:false}
            >
              Login
            </button>
          </form>
		  </div>
    </div>
        </Fragment>
    )
}