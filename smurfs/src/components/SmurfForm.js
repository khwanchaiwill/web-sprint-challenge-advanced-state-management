import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
// import { getSmurfData, addSmurfs } from '../action/getSmurf'

const initialValues = {
    name: "",
    age: "",
    height: ""
}

const SmurfsForm = props => {
    console.log(props)
    const [ newSmurf, setNewSmurf ] =useState(initialValues)

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurfs(newSmurf)
        setNewSmurf('')
    }
    const handleChange = e  => {
        const {name, value} = e.target
        setNewSmurf({...newSmurf,
             [name]: value})
    }
    return (
        <div className="smurf-form">
            <div className="form-input">
                <form className="smurf">
                    <label>Name  &nbsp; :</label>
                    <input 
                        type="text"
                        name="name"
                        value={props.name}
                        onChange={handleChange}
                    />
                    <label> Age &nbsp; :</label>
                    <input 
                    className='age'
                        type="text"
                        name="age"
                        value={props.age}
                        onChange={handleChange}
                    />
                    <label>Height &nbsp; :</label>
                    <input 
                        type="text"
                        name="height"
                        value={props.height}
                        onChange={handleChange}
                    
                    />
                </form>
                <button onClick={handleSubmit}>Add Smurfs</button>
            </div>

        </div>

    )
}
// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         smurfs: state.smurfs
//     }
// }
// export default connect(
//     mapStateToProps,
//     {addSmurfs}
// )(SmurfsForm);
export default SmurfsForm;