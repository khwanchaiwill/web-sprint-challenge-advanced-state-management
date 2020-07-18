import axios from 'axios';

export const GET_SMURFDATA_START = "GET_SMURFDATA_START";
export const GET_SMURFDATA_SUCCESS = "GET_SMURFDATA_SUCCESS";
export const GET_SMURFDATA_FAILURE = "GET_SMURFDATA_FAILURE";

export const getSmurfData = () => {
    return dispatch => {
        dispatch({ type: GET_SMURFDATA_START});

        axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_SMURFDATA_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            console.log(err)
            dispatch({ type: GET_SMURFDATA_FAILURE})
        })
    }
}

export const ADD_NEW_SMURFS_START = "ADD_NEW_SMURFS_START";
export const ADD_NEW_SMURFS_SUCCESS = "ADD_NEW_SMURFS_SUCCESS";
export const ADD_NEW_SMURFS_FAIL = "ADD_NEW_SMURFS_FAIL";



export const addSmurfs = (newSmurf )=> dispatch =>{

            dispatch({ type: ADD_NEW_SMURFS_START})
        axios.post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log(res.data)
            dispatch({type: ADD_NEW_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_NEW_SMURFS_FAIL})
        })
    
   
}