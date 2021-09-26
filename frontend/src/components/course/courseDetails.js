import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getcourseDetails,PurchaseCourse } from '../actions/authaction'

const  CourseDetails=({match})=> {

    const alert= useAlert()

  const dispatch= useDispatch();
  const {Coursedetails}=useSelector(state=>state.Details)

  const CourseId = match.params.id;

useEffect(()=>{ 

  dispatch(getcourseDetails(CourseId)) 


},[dispatch,CourseId])
const handlechange=()=>{
    dispatch(PurchaseCourse(CourseId))
    alert.success('Course Purchased Successfully')
}
    return (
        <div className="col-12 col-md-5">
        <h1 className="head"> Course</h1>     
      

<img src={Coursedetails.images?Coursedetails.images[0].url:''} alt={Coursedetails.title}/>

<hr />
<h3>{Coursedetails.title}</h3>
<hr />

<h4>Provided by {Coursedetails.companyname}</h4>
<hr />

<h6>Created by {Coursedetails.instructor}</h6>
<hr />
<h5>Price :- {Coursedetails.price} Only-</h5>
<hr />

<h5>Course Duration :- {Coursedetails.coursetiming}</h5>
<hr />
<h3>DashBoard :- </h3> <h5>{Coursedetails.description}</h5>
<hr />

<button className="btn_purchase" onClick={handlechange}> Purchase Course</button>
            </div> 
    
    )
}

export default CourseDetails