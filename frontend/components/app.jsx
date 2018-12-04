import React from 'react';
import TodoListContainer from './todos/todo_list_container';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> This is our app component! </h1>
        <TodoListContainer />  
      </div>
    );
  }
}

export default App;
