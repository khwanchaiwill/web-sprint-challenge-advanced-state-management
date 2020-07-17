import React from 'react';

const SmurfsForm = props => {
    return (
        <div className="smurf-form">
            <div className="form-input">
                <form className="smurf">
                    <input 
                        type="text"
                        name="smurfName"
                        value={props.addText}
                        onChange={props.handleChange}
                    />
                </form>
                <button onClick={props.handleSubmit}>Add Smurfs</button>
            </div>

        </div>

    )
}
export default SmurfsForm;