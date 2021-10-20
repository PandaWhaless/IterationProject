import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';

import logo from '../../Pockets-logo.png';


class MainContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        transactions: [1,2,3],
        total: 100
      };

      this.submit = this.submit.bind(this);
      this.delete = this.delete.bind(this);
    }
  

  // change this to componentDidUpdate
  componentDidMount() {
    fetch('api/transactions')
      .then( response => response.json())
      .then( data => {
        // console.log('received data', data);
        this.setState({
          transactions: data.data,
          total: data.total
        });
        console.log('new state', this.state);
      })
      .catch(err => {
        console.log('error fetching transaction data', err);
      })
  };

  delete(t_id) {
      // console.log('identiifcation', identification['_id'])
      fetch('/api/transactions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: t_id,
        })
      })
      .then(data => data.json()) 
      .then(res => {
        this.setState({
          transactions: res.data,
          total: res.total
        });
      })// added set state to re-render
      .catch(err => console.log(err));
  };


    submit(){
      console.log('submit activated')
      if(document.getElementById('category').value !== "1"){
        fetch('/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: document.getElementById('transactionName').value,
            amount: document.getElementById('transactionAmt').value,
            date: new Date().toLocaleDateString(),
            category_id: document.getElementById('category').value
          })
        })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          // console.log(this.state);
          const transactions = data.data;
          // // transactions.push(data);
          this.setState({
            transactions: transactions,
            total: data.total
          });
          document.location.reload();
        })
        .catch(err => console.log(err));
      }
      else{
        alert('CHOOSE A FUCKING CATEGORY');
        console.log('submit was clicked while category was still "choose category"');
      }
    };


    render(){
      return (
        <div className = 'mainContainer'>
          <img src={logo} id="logo"/>
          <InputsContainer submit={this.submit}/>
          <DisplayContainer delete={this.delete} state={this.state}/>
        </div>
      )
    };
}

export default MainContainer;