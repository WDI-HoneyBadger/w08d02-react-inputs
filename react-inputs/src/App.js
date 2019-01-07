import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      headerText: "This is not a header",
      progress: 23
    }
  }

  changeHeaderText(event){
    const newValue = event.target.value;
    this.setState({ headerText: newValue });
  }

  barContainerStyle(){
    return {
      width: '600px',
      height: '15px',
      backgroundColor: '#F0F0F0',
      border: '1px solid black',
      borderRadius: '7px',
      margin: '0 auto'
    }
  }

  innerBarStyle(){
    return {
      width: `${this.state.progress}%`,
      height: '100%',
      backgroundColor: 'red',
      borderRadius: '7px',
    }
  }

  handleProgressChange(event){
    const newProgress = event.target.value;
    this.setState({ progress: newProgress })
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.headerText }</h1>
        <input type="text" 
               value={this.state.headerText}
               onChange={this.changeHeaderText.bind(this)}/>

        {/* Create a progress bar */}

        <h2>{this.state.progress}% complete</h2>
        <div style={this.barContainerStyle()}>
          <div style={this.innerBarStyle()}></div>
        </div>
        <input type="range" 
               value={this.state.progress}
               onChange={this.handleProgressChange.bind(this)}
               style={{ width:'600px' }} />

      </div>
    );
  }
}

export default App;
