import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props){
      super(props);
    }

    render(){
      const rows = [];
      const transactions = this.props.state.transactions;
      for (let i = 0; i < transactions.length; i++) {
        rows.push(
          <div key={i}>
          <div className="row" >
            <div className='item'>{transactions[i].date}</div>
            <div className='item'>{transactions[i].name}</div>
            <div className='item'>{transactions[i].category}</div>
            <div className='item'>{transactions[i].amount}</div>
            <button className='delete' id='editButton' onClick={()=>this.props.delete(transactions[i]['_id'])}>X</button>
          </div>   
        </div>   
        )
      }
      
      return (
        <div className='transactionsDisplay'>
          <div className="headerRow">
              <span className='header'>Date</span>
              <span className='header'>Transaction</span>
              <span className='header'>Category</span>
              <span className='header'>Amount</span>
          </div>
          <div className="feedItem">
            <div className="transactionTable">
              <div className="transactions">
                {rows}
              </div> 
            </div>
          </div>
        </div>
      )
    }
  }

export default FeedItem;