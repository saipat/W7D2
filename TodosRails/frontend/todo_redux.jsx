import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import allTodos from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store = configureStore();

  window.store = store;
  window.allTodos = allTodos;

  ReactDOM.render(
    <div>
      <h1>Todos App</h1>
      <Root store={store}/>
    </div>,
    content
  );
});
