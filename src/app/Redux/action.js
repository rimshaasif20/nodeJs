"use client"
import axios from "axios";
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SEARCH_USER = 'SEARCH_USER';
export const EDIT_USER = 'EDIT-USER';
export const FETCH_RECORDS_REQUEST = 'FETCH_RECORDS_REQUEST';
export const FETCH_RECORDS_SUCCESS = 'FETCH_RECORDS_SUCCESS';
export const FETCH_RECORDS_FAILURE = 'FETCH_RECORDS_FAILURE';

export const addUsers = (user) => {
  debugger;
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const userToBeUpdated = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const fetchRecordsRequest = () => ({
  type: FETCH_RECORDS_REQUEST
});

export const fetchRecordsSuccess = (records) => ({
  type: FETCH_RECORDS_SUCCESS,
  payload: records
});

export const fetchRecordsFailure = (error) => ({
  type: FETCH_RECORDS_FAILURE,
  payload: error
});

// export const fetchRecords = () => {
//   debugger;
//   return (dispatch) => {
//     dispatch(fetchRecordsRequest());
//     axios.get("https://restcountries.com/v3.1/all")
//       .then(response => {
//         const records = response.data;
//         dispatch(fetchRecordsSuccess(records));
//         console.log(records);
//       })
//       .catch(error => {
//         dispatch(fetchRecordsFailure(error.message));
//       });
//   };
// };
export const fetchRecords = () => {
 
  return async (dispatch) => {
    dispatch(fetchRecordsRequest());
     debugger;
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const records = response.data;
      dispatch(fetchRecordsSuccess(records));
      console.log(records);
    } catch (error) {
      dispatch(fetchRecordsFailure(error.message));
    }
  };
};
