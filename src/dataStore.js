import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { hostelReducer } from "./HReducer/hReducer";



// create reducer
const reducer=combineReducers({

    reducer1:hostelReducer

})

// create middleware
const middleware=[thunk]

// create store
//                      reducer,middleware
const store=createStore(reducer,applyMiddleware(...middleware))


export default store