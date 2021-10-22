import React, { Component } from 'react';

class Total extends Component {
    constructor(props){
        super(props);
      }

    render(){
      let total = 0;
      const transactions = this.props.transactions;
      for (let i = 0; i < transactions.length; i++) {
        if(transactions[i].month === this.props.month || this.props.month === 'All'){
          console.log(transactions[i].amount)
          total += Number(transactions[i].amount);
        }
      }

      return (
        <div className='total'>
          Total: ${total}
        </div>
      )
    }
}

export default Total;