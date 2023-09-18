import React, { Component } from "react";
import "./Main.css"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novaTarefa: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
