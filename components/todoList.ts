import Component from './component';
import state from '../store';
import { watch } from '@vue/composition-api';

export default class TodoList implements Component {
  render() {
    const ul = document.createElement('ul');
    watch(state.todoList, () => {
      ul.innerHTML = '';
      for (let todoItem of state.todoList.value) {
        const li = document.createElement('li');
        li.textContent = `${todoItem.title}`
        ul.appendChild(li)
      }
    });
    return ul;
  }
}
