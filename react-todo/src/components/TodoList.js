import React, { Component } from 'react';

class TodoList extends Component {
  // what happens on component update
  componentDidUpdate() {
    // keeps the cursor in the task field
    this.props.inputElement.current.focus();
  }

  // render
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              className="inputTask"
              placeholder="Enter task here..."
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
