import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS ,
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
UPDATE_PROFILE_RESET,
ALL_COURSES_REQUEST,
ALL_COURSES_SUCCESS,
ALL_COURSES_FAIL,
COURSE_DETAILS_REQUEST,
COURSE_DETAILS_SUCCESS,
COURSE_DETAILS_FAIL,
PURCHASE_COURSE} from '../constants/authconstants.js'


export const authReducer=(state={user:{}},action)=>{
    switch(action.type){

        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenicated:false,
            }

            case LOGIN_SUCCESS:
            case REGISTER_USER_SUCCESS:
            case LOAD_USER_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    isAuthenicated:true,
                     user:action.payload
                }

                case LOGOUT_SUCCESS:
                    return {
                        loading:false,
                        isAuthenicated:false,
                        user:null
                    }
                case LOAD_USER_FAIL:
                    return{
                        loading:false,
                        isAuthenicated:false,
                        user:null,
                        error:action.payload
                    }
                    case LOGOUT_FAIL:
                        return{
                            ...state,error:action.payload
                        }
                case LOGIN_FAIL:
                case REGISTER_USER_FAIL:
                    return{
                        ...state,
                        loading:false,
                        isAuthenicated:false,
                        user:null,
                        error:action.payload
                    }
                    case CLEAR_ERRORS:
                        return{
                            ...state,
                            error:action.payload
                        }
    default:
        return state;

    }
}

export const updateprofileReducer=(state={UpdateProfile:{}},action)=>{
    switch(action.type){

       case UPDATE_PROFILE_REQUEST:
            return{
                ...state,
                loading:true,
                isUpdated:false,
            }

           case UPDATE_PROFILE_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    isUpdated:true,
                     user:action.payload
                }

              
                case UPDATE_PROFILE_FAIL:
                    return{
                        loading:false,
                        isUpdated:false,
                        user:null,
                        error:action.payload
                    }
                 case UPDATE_PROFILE_RESET:
                     return {
                         ...state,
                         isUpdated:false
                     }
              
                    case CLEAR_ERRORS:
                        return{
                            ...state,
                            error:null
                        }
    default:
        return state;

    }
}

export const allCoursesReducer = (state = { Courses: [] }, action) => {
    switch (action.type) {

        case ALL_COURSES_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                Courses: action.payload
            }
 
        case ALL_COURSES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        // case CLEAR_ERRORS:
        //     return {
        //         ...state,
        //         error: null
        //     }

        default:
            return state;
    }
}

export const CoursedetailsReducer = (state = { Coursedetails: {} }, action) => {
    switch (action.type) {

        case COURSE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case COURSE_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                Coursedetails: action.payload
            }
 
        case COURSE_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

     

        default:
            return state;
    }
}


export const purchaseReducer = (state = { purchaseItems: []}, action) => {
    switch (action.type) {

        case PURCHASE_COURSE:
            const item = action.payload;
console.log(item);
            const isItemExist = state.purchaseItems.find(i => i.courseid === item.courseid)

            if (isItemExist) {
                return {
                    ...state,
                    purchaseItems: state.purchaseItems.map(i => i.courseid === isItemExist.courseid ? item : i)
                }
            } else {
                return {
                    ...state,
                    purchaseItems: [...state.purchaseItems, item]
                }
            }
            default:
                return state
        }
    }
