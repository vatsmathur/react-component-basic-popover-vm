import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state={
     visible: false
    }
  }
 togglePopUp=()=>{
   this.setState({visible: !this.state.visible})
 }
  render() {
    return (
      <div>
        <button onClick={this.togglePopUp}>?</button>
        {(this.state.visible) && <div id="popOver">This is the pop over content</div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
