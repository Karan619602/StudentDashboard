import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer,updateprofileReducer,allCoursesReducer,CoursedetailsReducer,purchaseReducer } from './components/reducers/authreducers';
const reducer = combineReducers({
 auth:authReducer,
 update:updateprofileReducer,
 allcourses:allCoursesReducer,
 Details:CoursedetailsReducer ,
 purchase:purchaseReducer
})


let initialState = {
    purchase: {
        purchaseItems: localStorage.getItem('purchaseItems')
            ? JSON.parse(localStorage.getItem('purchaseItems'))
            : [],
      
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;