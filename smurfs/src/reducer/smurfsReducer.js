// import { ADD_NEW_SMURFS_START, ADD_NEW_SMURFS_SUCCESS, ADD_NEW_SMURFS_FAIL } from '../action/smurfAction';
import { GET_SMURFDATA_START, GET_SMURFDATA_SUCCESS, GET_SMURFDATA_FAILURE, ADD_NEW_SMURFS_START, ADD_NEW_SMURFS_SUCCESS, ADD_NEW_SMURFS_FAIL} from '../action/getSmurf'
    
    const smurfState = {
        isLoading: false,
        smurf: [],  
        error: ""     
    }

    export const reducer = ( state = smurfState, action ) => {
        switch(action.type) {
            case GET_SMURFDATA_START:
                return {
                    ...state,
                    isLoading: true
                }
            case GET_SMURFDATA_SUCCESS:
                return{
                    ...state, 
                    isLoading: false,
                    smurf: action.payload,
                    error: ""

                }
            case GET_SMURFDATA_FAILURE:
                return {
                    ...state,
                    error: "something wrong"
                }

            case ADD_NEW_SMURFS_START:
            return {
                ...state,
                isLoading: true
            }

            case ADD_NEW_SMURFS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                   smurf: action.payload
                }
            case ADD_NEW_SMURFS_FAIL:
                return {
                    ...state,
                   error: "got the wrong code"
                }
        
            
            default:
                return state;

        }
    }