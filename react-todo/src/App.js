import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    };
  }

  // to handle data on input field on change
  handleInput = input => {
    const itemText = input.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  // to handle click on add
  addItem = item => {
    // stop page from refreshing onClick
    item.preventDefault();

    // checks to make sure there is a new task before adding one
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
      });
    }
  };

  // delete a task
  deleteItem = key => {
    // stores the items that don't match the key
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
