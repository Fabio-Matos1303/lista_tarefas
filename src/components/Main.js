/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { FaPlus } from "react-icons/fa"
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
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={ novaTarefa } />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
