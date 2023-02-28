import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    HandleOnClick=()=>{
        this.setState((prevState) => ({ 
            count: prevState.count + 1 
         }))
         console.log("clickedcompleted");
    }
    
  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button onClick={this.HandleOnClick}>Increment</button>
      </div>
    )
  }
}

export default Counter