//Desenvolva um contador que tenha as seguintes funcionalidades:
//1 - O contador não pode chegar abaixo de 0
//2 - O contador não pode chegar acima de 10

import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    cont: 0
  };

  Add = () => {
    if (this.state.cont < 10) {
      this.setState({
        cont: this.state.cont + 1
      });
    }
  };

  Remove = () => {
    if (this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <p>{this.state.cont}</p>
        <button onClick={this.Add}>+</button>
        <button onClick={this.Remove}>-</button>
      </div>
    );
  }
}
