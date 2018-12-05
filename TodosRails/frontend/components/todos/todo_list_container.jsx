import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state)
  // state // might be useful for debugging though
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

const createConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default createConnectedComponent;
