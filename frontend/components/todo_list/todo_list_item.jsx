import React from 'react';

class TodoListItem extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.todo.title}</li>
        </ul>
      </div>
    );
  }
}

export default TodoListItem;
