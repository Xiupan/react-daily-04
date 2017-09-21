import React, {Component} from 'react';

class Form extends Component{
  render(){
    return(
      <div className="container">
        <div className="card text-center">
          <div className="card-block">
            <h3 className="card-title">What is your name, pilot?</h3>
            <form>
              <input type="text" />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
