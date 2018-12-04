import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  render() {
    const list = this.props.todos.map((todo) => {
      return <TodoListItem todo={todo} key={todo.id} />;
    });

    return (
      <div>
        <ul>
          {list}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
