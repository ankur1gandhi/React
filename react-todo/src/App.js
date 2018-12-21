import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    };
  }

  // to handle data on input field on change
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  // to display the value of the state set to currentItem
  currentItem = () => {
    console.log('Hello Current Item');
  };

  // to handle click on add
  addItem = e => {
    e.preventDefault();
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

  // render
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.currentItem}
        />
      </div>
    );
  }
}

export default App;
