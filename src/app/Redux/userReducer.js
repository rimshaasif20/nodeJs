"use client"
import { ADD_USER, UPDATE_USER, DELETE_USER, EDIT_USER,FETCH_RECORDS_REQUEST, FETCH_RECORDS_SUCCESS, FETCH_RECORDS_FAILURE } from './action';

const initialState = {
  users: [{msg:"coming from here"}], // Initialize as an empty array
  editingUser: null,
  records:[],
   loading: false,
  error: null
};
const UserReducer = (state = initialState, action) => {



  switch (action.type) {
    case ADD_USER:
 
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case EDIT_USER:
      return {
        ...state,
        editingUser: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
        editingUser: null,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
       case FETCH_RECORDS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_RECORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
        error: null
      };
    case FETCH_RECORDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default UserReducer;
