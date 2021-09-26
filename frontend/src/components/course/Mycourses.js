import React,{Fragment} from 'react'
import { useSelector } from 'react-redux'
import { MDBDataTable } from 'mdbreact'


const MyCourses=()=>{
   const {purchaseItems}=useSelector(state=>state.purchase)

   

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
        
           
        ],
        rows: []
    }
    purchaseItems.forEach(Course => {

        data.rows.push({

           
            Company:Course.companyname,
            
            Title: Course.title, 
            Instructor: Course.instructor ,
            Description: Course.description,
           
            Price:Course.price  ,

         

           
        })
    })

    return data;
}

    return (
    
        <Fragment>

      

        <h1 className="my-5">MY Courses</h1>

        {/* {loading ?<Loader/>: ( */}
            <MDBDataTable
                data={setCourses()}
                className="px-3"
                bordered
                striped
                hover
            />
        {/* )} */}

    </Fragment>
)
}

export default MyCourses