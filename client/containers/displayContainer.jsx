import React, { Component } from 'react';
import FeedItem from "../components/feedItem.jsx";
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/Total.jsx';
import LineChart from '../components/lineChart.jsx';




class DisplayContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        month: 'All',
        budget: 20000
      }
      this.change = this.change.bind(this);
      this.budget = this.budget.bind(this);
    }

    change(month){
      // this.setState({month: document.getElementById('filterMonth').value})
      this.setState({
        month: month,
        budget: this.state.budget
      });
    }

    budget(input){
      if(Number(input)){
        this.setState({
          month: this.state.month,
          budget: input})
      } else alert('Please insert a real number');
   }
    componentDidMount() {
      this.props.getName()
    }
    
    render(){
      return (
        <>
        <center>
          <h3 id='name'> {this.props.state.name}'s monthly expenses:</h3>
          </center>
          <FeedItem state={this.props.state} delete={this.props.delete} month={this.state.month} change={this.change}/>
          
          <Total month={this.state.month} total={this.props.state.total} transactions={this.props.state.transactions}/>
          
          <div id="chartContainer">
            <TotalsDisplay budget= {this.budget} state = {this.state} transactions={this.props.state.transactions} month={this.state.month}/>
            <PieChart transactions={this.props.state.transactions} total={this.props.state.total} month={this.state.month}/>
            {/* <LineChart transactions={this.props.state.transactions} total={this.props.state.total}/> */}
          </div>
        </>
      )
    }
}

export default DisplayContainer;