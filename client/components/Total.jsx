import React, { Component } from 'react';

class Total extends Component {
    constructor(props){
        super(props);
      }
 
    render(){
      return (
        <div className='total'>
          Total: ${this.props.total}
        </div>
      )
    }
}

export default Total;