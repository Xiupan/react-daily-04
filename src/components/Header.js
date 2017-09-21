import React, { Component } from 'react'
import '../styles/App.css';

class Header extends Component{
  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Star Wars</h1>
          <hr className="my-4"/>
          <p className="lead">
            The Vehicles of Star Wars
          </p>
        </div>
      </div>
    )
  }
}

export default Header
