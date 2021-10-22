import React, { Component } from 'react';

class TotalsDisplay extends Component {
    constructor(props){
      super(props);
    }

    render(){
      let total = 0;
      const transactions = this.props.transactions;
      for (let i = 0; i < transactions.length; i++) {
        if(transactions[i].month === this.props.month || this.props.month === 'All'){
          // console.log(transactions[i].amount)
          total += Number(transactions[i].amount);
        }
      }
      return (
        <div className = "totalsDisplay">
          <center>
            <div>
              Budget:
              <br></br>
              ${this.props.state.budget}
            </div>
            <div>
              Total Spent:
              <br></br>
              <center>${total}</center>
            </div>
            <div>
              Remaining:
              <br></br>
              <center>${Number(this.props.state.budget) - total}</center>
            </div>
            {/* <form id="editForm">p here</form> */}
            <input type='text' className='input' id='budgetInput'/> 
            <button id="editButton" onClick={()=>this.props.budget(document.getElementById('budgetInput').value)}>Edit Budget</button>
          </center>
        </div>
      )
    }
}

export default TotalsDisplay;