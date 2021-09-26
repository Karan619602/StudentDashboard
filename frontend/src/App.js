import './App.css';
import {Signup} from './components/auth/signup.js'
import { useEffect } from 'react';
import { loaduser } from './components/actions/authaction';
import { useDispatch } from 'react-redux'; 
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Profile } from './components/auth/profile';
import ProtectedRoute from './components/protectedroute';
import  UPDATE from './components/auth/updateprofile'
import { Login } from './components/auth/login';
import Dashboard from './components/course/listcourses';
import CourseDetails from './components/course/courseDetails'
import MyCourses from './components/course/Mycourses';
import Header from './header'
function App() {
const dispatch=useDispatch()
  useEffect(()=>{
dispatch(loaduser())
  },[dispatch])
  return (
   
    
    <Router  >
    
   <Header/>
<Route path="/Signup" component={Signup} exact/>
<Route path="/login" component={Login} exact/>


<ProtectedRoute path="/Profile" component={Profile} exact/>

<Route path="/UpdateProfile" component={UPDATE} exact/>
<Route path="/Courses" component={Dashboard} exact/>
<Route path="/course/:id" component={CourseDetails} exact/>

<Route path="/MyCourses" component={MyCourses} exact/>

    </Router>
  );

}

export default App;
