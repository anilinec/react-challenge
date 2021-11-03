import React, { Component } from 'react';
import img1 from './Assets/look-left.jpeg';
import img2 from './Assets/look-right.jpeg';


class ChallengeOne extends Component {
  //declare the state here
  state = {
    imageSrc:img1,
    imageAlt:'img1',
    status:true
  };

  //click left/right button handler goes here

  btnClickLeft = () => {
   this.state.status ?
    this.setState({
      imageSrc:img1,
      imageAlt:'img1',
      status:false
    })
    :
    this.setState({
      imageSrc:img2,
      imageAlt:'img2',
      status:true
    })
  }
  btnClickRight = () => {
    this.state.status ?
     this.setState({
       imageSrc:img1,
       imageAlt:'img1',
       status:false
     })
     :
     this.setState({
       imageSrc:img2,
       imageAlt:'img2',
       status:true
     })
   }
 
  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.imageSrc}
            alt={this.state.imageAlt}
          />
        </div>
        <button className="btn" onClick={this.btnClickLeft}>⭠</button>
        <button className="btn" onClick={this.btnClickRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;