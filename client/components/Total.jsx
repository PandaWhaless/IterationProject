import React, { Component } from 'react';

class Total extends Component {
    constructor(props){
        super(props);
      }
 
    render(){
      console.log("HELLOOOO!?!?!?!");
      // console.log("WE ARE IN TOTAL!!!", this.props.total);
      return (
        <div className='total'>
          Total: ${this.props.total}
        </div>
      )
    }
}

export default Total;