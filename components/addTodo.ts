import Component from './component';
import { addTodo } from '../store';

export default class AddTodo implements Component {
  render() {
    const parent = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    parent.appendChild(input);
    const button = document.createElement('button');
    button.textContent = 'Add a task';
    button.addEventListener('click', () => {
      addTodo(input.value);
      input.value = '';
    });
    parent.appendChild(button);
    return parent;
  }
}