import React, { useState, useEffect } from  'react';
import { useRouteMatch, NavLink } from 'react-router-dom'


const SmurfLists = (props) => {
    console.log(props)

    const { url } = useRouteMatch()

    useEffect(()=> {
        props.getSmurfData()
        
    }, [])

    
    return(
        <div className="get-smurf">
            <div  className="smurflist">
                {
                    props.smurf.map(item => (
                        
                        <div className="smurf-itemlist" key={item.id}>
                            <p> {item.name} </p>
                            <p> {item.age}</p>
                            <p> {item.height} </p>
                        <NavLink to={`${url}/${item.id}`}>    
                            <button>See indevidual Card</button>
                        </NavLink>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
    
}
// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         smurf: state.smurf
//     }
// }
// export default connect(
//     mapStateToProps ,
//     {getSmurfData}
// ) (SmurfLists);
export default SmurfLists;