import React, { useState } from  'react';
import { connect } from 'react-redux'
import { addSmurfs } from '../action/smurfAction'


import SmurfsForm from './SmurfForm'

const SmurfLists = (props) => {
    const [ addText, setAddText ] =useState("")

    const handleChange = e  => {
        setAddText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        {props.addSmurfs(addText)}
        setAddText("")
    }

    return(
        <div className="get-smurf">
            <SmurfsForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit} 
                addText={props.addText}
            />
            <div>
                {
                    props.map(item => (
                        <div>
                            <p> {item.name} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    
}
const mapStateToProps = state => {
    console.log(state)
    return {
        name: state.name,
        age: state.age,
        height: state.height
    }
}
export default connect(
    mapStateToProps ,
    {addSmurfs}
) (SmurfLists);