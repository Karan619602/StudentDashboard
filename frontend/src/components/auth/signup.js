import React,{Fragment,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { register } from '../actions/authaction'
import '../../App.css'

export const Signup=({history})=>{
    const [user,setuser]=useState({
        username:'',
        email:'',
        password:'',
        Bio:'',
        Interest:''

       

    })
    

const {username,email,password,Bio,Interest}=user;
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
  
      dispatch(register(user))
      setuser({
        username:'',
        email:'',
        password:'',
        Bio:'',
        Interest:''
      })

    }
    
    const onChange=(e)=>{
     
       setuser({...user,[e.target.name]:e.target.value})
   
   
       }
    return (
        <Fragment>
                       <div className="row wrapper">
		<div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submithandler}    >
            <h1 className="mb-3">Register</h1>

          <div className="form-group">
            <label htmlFor="email_field">Name</label>
            <input type="name" id="name_field" className="form-control" 
             name='username'
              value={username}
            
               onChange={onChange}/>
          </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name='email'
              value={email}
              onChange={onChange}
                
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
              onChange={onChange}


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
              value={Bio}
              onChange={onChange}


              />
            </div> <div className="form-group">
              <label htmlFor="password_field">Interest</label>
              <textarea
               cols="30"
                type="text"
                id="password_field"
                className="form-control"
                name='Interest'
              value={Interest}
              onChange={onChange}


              />
            </div>


          

  
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              //disabled={loading?true:false}
            >
              REGISTER
            </button>
          </form>
		  </div>
    </div>
        </Fragment>
    )
}