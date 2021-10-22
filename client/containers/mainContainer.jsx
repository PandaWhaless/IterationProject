import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';
import logo from '../../public/12.png';


class MainContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        transactions: [],
        total: 0,
        name: '',
      };

      this.submit = this.submit.bind(this);
      this.delete = this.delete.bind(this);
      this.getName = this.getName.bind(this);
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
        // console.log('new state', this.state);
      })
      .catch(err => {
        console.log('error fetching transaction data', err);
      })
  };


  delete(t_id) {
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

    submit(dateVal){
      console.log('submit activated')
      const dates = dateVal.toString().split(' ');
      const month = dates[1];
      const day = dates[2];
      const year = dates[3];
      const monthConverter = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
      const dateString = monthConverter[month] + '/' + Number(day) + '/' + year;
      console.log(dateString);
      console.log('on change date val : ', month, day, year);
      if(document.getElementById('category').value !== "1"){
        fetch('/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: document.getElementById('transactionName').value,
            amount: document.getElementById('transactionAmt').value,
            date: dateString,
            month: dates[1],
            category_id: document.getElementById('category').value
          })
        })
        .then(response => response.json())
        .then(data => {
          const transactions = data.data;
          this.setState({
            transactions: transactions,
            total: data.total
          });
        })
        .then(() => {
          alert('Transaction added!');
          document.getElementById('transactionName').value = null;
          document.getElementById('transactionAmt').value = null;
          document.getElementById('category').value = '1';
        })
        .catch(err => console.log(err));
      }
      else{
        console.log('submit was clicked while category was still "choose category"');
      }
    };
// fetch for 'username's m
    getName() {
      fetch('/api/monthly')  
        .then(res => res.json())
        .then(resp => {
          this.setState({
            ...this.state,
            name: resp})
        })
        .catch(err => console.log(err));
    }

    render(){
      return (
        <div className = 'mainContainer'>
          <img src={logo} id="logo"/>
          <InputsContainer submit={this.submit} date={this.date}/>
          <DisplayContainer delete={this.delete} state={this.state} getName={this.getName}/>
        </div>
      )
    };
}

export default MainContainer;