import React, { Component } from 'react';

class TotalsDisplay extends Component {
    constructor(props){
      super(props);
    }

    render(){
      
      return (
        <div className = "totalsDisplay">
          <center>
            <div>
              Budget:
              <br></br>
              $5000
            </div>
            <div>
              Total Spent:
              <br></br>
              <center>${this.props.total}</center>
            </div>
            <div>
              Remaining:
              <br></br>
              <center>${5000 - this.props.total}</center>
            </div>
            <button id="editButton">Edit Budget</button>
          </center>
        </div>
      )
    }
}

export default TotalsDisplay;