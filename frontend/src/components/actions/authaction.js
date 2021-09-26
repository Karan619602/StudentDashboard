import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
     REGISTER_USER_SUCCESS,
     LOAD_USER_REQUEST,
     LOAD_USER_SUCCESS,
     LOAD_USER_FAIL,
   LOGOUT_SUCCESS,
   LOGOUT_FAIL,
  
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
ALL_COURSES_REQUEST,
ALL_COURSES_SUCCESS,
ALL_COURSES_FAIL,
COURSE_DETAILS_REQUEST,
COURSE_DETAILS_SUCCESS,
COURSE_DETAILS_FAIL,
PURCHASE_COURSE} from '../constants/authconstants.js'
    

import axios from 'axios'
export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
        const config={
                 headers:{
                     'Content-Type':'application/json'
                 }
                    }
        const {data}= await axios.post(`/api/v1/user/login`,{email,password},config)
      
        dispatch({type:LOGIN_SUCCESS,
                   payload:data.user}) 
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}

//register user
export const register=(userdata)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST})
       
        const {data}= await axios.post(`api/v1/user/register`,userdata)
        dispatch({
            type:REGISTER_USER_SUCCESS,
                   payload:data.user
                })
        
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

//load user
export const loaduser=()=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST})
       
        const {data}= await axios.get(`/api/v1/user/me`)
        dispatch({type:LOAD_USER_SUCCESS,
                   payload:data.user})
        
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response
        })
    }
}

//logout user
export const logoutuser=()=>async(dispatch)=>{
    try {
        
       
         await axios.get(`/api/v1/user/logout`)
        dispatch({type:LOGOUT_SUCCESS
                   })
        
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
}

//update profile
export const UpdateProfile=(id,UserData)=>async(dispatch)=>{
    console.log(UserData)
    try {
        dispatch({type:UPDATE_PROFILE_REQUEST})
       
        const {data}= await axios.put(`api/v1/user/update/${id}`,{UserData:UserData})
        dispatch({
            type:UPDATE_PROFILE_SUCCESS,
                   payload:data.user
                })
        
    } catch (error) {
        dispatch({
            type:UPDATE_PROFILE_FAIL,
            payload:error.response.data.message
        })
    }
}


export const allCourses = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_COURSES_REQUEST })

        const { data } = await axios.get(`/api/v1/courses`)

        dispatch({
            type: ALL_COURSES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_COURSES_FAIL,
            payload: error.response
        })
    }
}

export const getcourseDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: COURSE_DETAILS_REQUEST })

      


        const { data } = await axios.get(`/api/v1/course/${id}`)
        dispatch({
            type: COURSE_DETAILS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const PurchaseCourse = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/course/${id}`)

console.log(data);
    dispatch({
        type: PURCHASE_COURSE,
        payload: {
            courseid: data._id,
            companyname: data.companyname,
            title: data.title,

            price: data.price,
            image: data.image,
            instructor: data.instructor,
            description: data.description,
duration:data.coursetiming
        
        }
    })

    localStorage.setItem('purchaseItems', JSON.stringify(getState().purchase.purchaseItems))
}