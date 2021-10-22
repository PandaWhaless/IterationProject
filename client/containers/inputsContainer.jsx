import React, { Component } from 'react';
import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
class InputsContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        date: new Date()
      }
      this.change = this.change.bind(this);
    }

    change(val){
      console.log(val);
      this.setState({date: val})
    }

    render(){
      return (
        <div className = 'inputContainer'>
          <input type="text" className='input' id="transactionName" placeholder='Transaction'/>
          <input type="text" className='input' id="transactionAmt" placeholder='Amount'/>
          {/* <select name="Category" className='input' id="month">
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select> */}
          <DatePicker selected={this.state.date} onChange = {(e)=>this.change(e)} id= 'datePick'/>
          <select name="Category" className='input' id="category">
            <option value="1">Choose Category</option>
            <option value="2">Housing/Rent</option>
            <option value="3">Utilities</option>
            <option value="4">Gas</option>
            <option value="5">Groceries</option>
            <option value="6">Dining Out</option>
            <option value="7">Drinks</option>
            <option value="8">Entertainment</option>
            <option value="9">Savings</option>
            <option value="10">Other</option>
          </select>
          <button onClick={()=>this.props.submit(this.state.date)} id="submitButton">Add Transaction</button>
        </div>
      )
    }
}

export default InputsContainer;