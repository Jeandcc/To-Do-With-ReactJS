import React, { Component } from "react";

import ToDoItem from "./ToDoItem";

class TaskList extends Component {
  state = {};
  render() {
    const { items, handleDelete } = this.props;
    return (
      <div className="items-list">
        {items.map(item => (
          <ToDoItem key={item.task} {...item} handleDelete={handleDelete} />
        ))}
      </div>
    );
  }
}

export default TaskList;
