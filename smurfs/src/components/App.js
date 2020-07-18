import React from "react";
import {Route, Router, Switch, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { getSmurfData, addSmurfs } from '../action/getSmurf'
import "./App.css";
import SmurfLists from './SmurfList'
import SmurfsForm from "./SmurfForm";
import SmurfSingleCard from './smurfSingleCard'



function App (props) {

 
    return (
      <div className="App">

        <header>
          <div className="head-title">
            <h1>SMURFS! Item</h1>
          </div>
          <nav className="nav-div">
            <NavLink className="direction" to="/list">Smurf List</NavLink>
            <NavLink className="direction" to="/">Add smurf</NavLink>
            
          </nav>
        </header>
        <div>
          <h3>Add Name Here</h3>
        </div>
        <div className="app-render">
          <Switch>
    
            <Route path="/list/:smurfId">
              <SmurfSingleCard smurf={props.smurf} />
            </Route> 

            <Route path="/list">
              <SmurfLists getSmurfData={props.getSmurfData} smurf={props.smurf} />
            </Route>
               
            <Route  path="/">
              <SmurfsForm addSmurfs={props.addSmurfs} />
            </Route>

          </Switch> 
                  
        </div>
      </div>
    );
  }


const mapStateToProps = state => {
  console.log(state)
  return {
      smurf: state.smurf
  }
}
export default connect(
  mapStateToProps,
  {addSmurfs, getSmurfData}
)(App);