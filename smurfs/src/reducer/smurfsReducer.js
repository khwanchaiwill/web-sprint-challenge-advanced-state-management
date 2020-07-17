import { ADD_NEW_SMURFS } from '../action/smurfAction';
    
    const smurfState = [
        {
            name: "",
            age: 200,
            height: "5cm",
            id: 0,
        }
    ];

    export const smurfsReducer = ( state = smurfState, action ) => {
        switch(action.type) {
            case ADD_NEW_SMURFS:
                return [...state, 
                    {
                        name: action.payload,
                        age: action.payload,
                        height: action.payload
                    }
                   
                ]
            default:
                return state;

        }
    }