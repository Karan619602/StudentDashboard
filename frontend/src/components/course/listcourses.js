import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allCourses } from '../actions/authaction'
import { MDBDataTable } from 'mdbreact'
import { Link } from 'react-router-dom'
import Loader from '../loader'


const Dashboard=({match,history})=>{
    const dispatch= useDispatch();
   const {Courses,loading}=useSelector(state=>state.allcourses)
   const {isAuthenicated} =useSelector(state=>state.auth)

    const userId = match.params.id;

  useEffect(()=>{ 
   if(!isAuthenicated){
history.push('/login')
   }
    dispatch(allCourses()) 
},[dispatch,userId,history,isAuthenicated])


const setCourses = () => {
    const data = {
        columns: [
            {
                label: 'Company Name',
                field: 'Company',
                sort: 'asc'
            },
           
            {
                label: 'Title',
                field: 'Title',
                sort:'asc'
            },
            {
                label: 'Instructor',
                field: 'Instructor',
                sort:'asc'
            },
            {
                label: 'Description',
                field: 'Description',
                sort:'asc'
            },
            {
                label: 'Price',
                field: 'Price',
                sort: 'asc'
            },
        
            {
                label: 'More Details',
                field: 'Action',
                sort:'asc'
            },
        ],
        rows: []
    }
    Courses.forEach(Course => {

        data.rows.push({

           
            Company:Course.companyname,
            
            Title: Course.title, 
            Instructor: Course.instructor ,
            Description: Course.description,
           
            Price:Course.price  ,

            Action:
            <Link to={`/course/${Course._id}`} className="btn btn-primary">
            <i className="btn">Details</i>
        </Link>

           
        })
    })

    return data;
}

    return (
    
        <Fragment>

      

        <h1 className="my-5">ALL Courses</h1>

        {loading ?<Loader/>: (
            <MDBDataTable
                data={setCourses()}
                className="px-3"
                bordered
                striped
                hover
            />
        )}

    </Fragment>
)
}

export default Dashboard