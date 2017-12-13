// import axios from 'axios';
// import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../src/redux/actions';

// //refresh readers on actions from ReactReduxTwitch
// //update code below for our API

// function RequestApi() {
//     return (dispatch) => {
//       //API request
//       axios.get('http://localhost:3001/api/streams')
//         .then(response => {
//           console.log(response);
//           //dispatch FetchSuccess, order 2
//           //dispatch(FetchSuccess(streams))
//         })
//         .catch(e => {
//           //dispatch FetchFailure, order 3
//           dispatch(FETCH_FAILURE(e))
//         });
//   //dispatch FetchRequest, order 1
//       dispatch(FETCH_REQUEST())
//     }
//   }

// export default RequestApi