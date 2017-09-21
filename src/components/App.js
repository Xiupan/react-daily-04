import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props)

    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/starships/')
    .then(response => response.json())
    .then((json) => {
      console.log("json.results", json.results);
    })
  }
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  handlePilotChange = (event) => {
    console.log("handlePilotChange");
    this.setState({
      pilot: event.target.value
    })
  }
  // See form lesson for details.
  // Enter your code below:

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      pilot: event.target.value
    })
  }
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    console.log("this.state", this.state);
    return (
      <div className="App">

        {/* Header */}
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">Star Wars</h1>
            <hr className="my-4"/>
            <p className="lead">
              The Vehicles of Star Wars
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="container">
          <div className="card text-center">
            <div className="card-block">
              <h3 className="card-title">What is your name, pilot?</h3>
              <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handlePilotChange}/>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>

        {/* Vehicle Card */}
        <div className="container">
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
