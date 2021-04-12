import './style.css';

import AddTodo from './components/addTodo';
import TodoList from './components/todoList';

const app = document.querySelector('#app');
app.appendChild(new AddTodo().render());
app.appendChild(new TodoList().render());
