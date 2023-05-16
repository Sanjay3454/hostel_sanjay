import { FAIL, SUCCESS } from "../constants/hostelConstant";

// reducer function 
//                 state to store the payload,working action
export const hostelReducer = (state = { hostelList: [] }, action) => {

    switch (action.type) {
        case SUCCESS:
            return {
                hostelList: action.payload
            }
        case FAIL:
            return{ 
                hostelList:action.payload
             }
        default:
            return state
    }

}
