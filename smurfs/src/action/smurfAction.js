import axios from 'axios';

export const ADD_NEW_SMURFS = "ADD_NEW_SMURFS";

export const addSmurfs = (newSmurfs) => dispatch =>{
        axios.post("http://localhost:3333/smurfs", newSmurfs)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_NEW_SMURFS, payload: res})
        })
        .catch(err => {
            console.log(err)
        })
    
}