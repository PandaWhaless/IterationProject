import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props){
      super(props);
      // this.state = {
      //   month: 'All'
      // }
      // this.change = this.change.bind(this);
    }

    // change(){
    //   this.setState({month: document.getElementById('filterMonth').value})
    // }


    render(){
      const rows = [];
      const transactions = this.props.state.transactions;
      for (let i = 0; i < transactions.length; i++) {
        if(transactions[i].month === this.props.month || this.props.month === 'All'){
          rows.push(
            <div key={i}>
            <div className="row" >
              <div className='item'>{transactions[i].date}</div>
              <div className='item'>{transactions[i].name}</div>
              <div className='item'>{transactions[i].category}</div>
              <div className='item'>{transactions[i].amount}</div>
              <button className='item' id='editButton' onClick={()=>this.props.delete(transactions[i]['_id'])}>delete delete delete</button>
            </div>   
          </div>   
          )
        }
      }
      
      return (
        <div> 
          <center>
          <select name="Category" className='input' id="filterMonth" onChange = {(e)=>this.props.change(e.target.value)}>
            <option defaultValue="All">All</option>
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
          </select>
          </center>
          <br/>
          <div className='transactionsDisplay'>
            <div className="headerRow">
                <span className='header'>Date</span>
                <span className='header'>Transaction</span>
                <span className='header'>Category</span>
                <span className='header'>Amount ($)</span>
                <span className='header'>Delete</span>

            </div>
            <div className="feedItem">
              <div className="transactionTable">
                <div className="transactions">
                  {rows}
                </div> 
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default FeedItem;