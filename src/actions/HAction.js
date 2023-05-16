import axios from "axios";
import { FAIL, SUCCESS } from "../constants/hostelConstant";



// api to access all restuarants data

export const getHostels = async (dispatch) => {
   try {
      const {data}= await axios.get('/hostels.json')

      console.log(data.hostel);
      dispatch(
         {
            payload: data.hostel,
            type: SUCCESS
         }
      )

   }
   catch (err) {
      dispatch(
         {
            payload:err,
            type: FAIL
         }
      )
   }
}