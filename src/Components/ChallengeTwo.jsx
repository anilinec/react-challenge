import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [studentList]
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
  
  }

  //random button handler
  randomize = (arr) => {
    let i = arr.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
  this.setState({
   arr:this.randomize.bind.studentList
  })
 
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {this.state.arr}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}