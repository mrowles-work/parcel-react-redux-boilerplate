import React, {Component,} from 'react';
import TodoList from './todos/TodoList';
import AddTodo from './todos/AddTodo';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddTodo/>
        <TodoList/>
      </div>
    );
  }
}
