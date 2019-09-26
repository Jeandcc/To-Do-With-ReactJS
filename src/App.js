import React from "react";

import "./css/webflow.css";
import "./css/app.css";

import Input from "./components/Input";
import TaskList from "./components/TaskList";

class App extends React.Component {
  state = {
    input: "",
    items: [
      { task: "Buy Groceries" },
      { task: "Talk to Mom" },
      { task: "Take out cash for trip" }
    ]
  };

  componentDidUpdate() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }

  componentDidMount() {
    var taskList = localStorage.getItem("items");
    if (taskList) {
      this.setState({ items: JSON.parse(taskList) });
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.input) {
      return;
    }
    this.setState({
      items: [...this.state.items, { task: this.state.input }],
      input: ""
    });
  };

  handleDelete = itemTask => {
    const items = this.state.items.filter(item => item.task !== itemTask);
    this.setState({ items: items });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="body-2">
        <h1 className="page-title">To-Do List</h1>
        <div className="content-wrapper">
          <Input
            value={this.state.input}
            onChange={this.onChange}
            onClick={this.onSubmit}
          />
          <TaskList handleDelete={this.handleDelete} items={items} />
        </div>
      </div>
    );
  }
}

export default App;
