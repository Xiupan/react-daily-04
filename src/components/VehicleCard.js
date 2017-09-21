import React, {Component} from 'react';
import '../styles/App.css';

class VehicleCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default VehicleCard
