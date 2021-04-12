import Vue from 'vue';
import VueCompositionAPI, { DeepReadonly, reactive, readonly, ref, Ref, UnwrapRef } from '@vue/composition-api';
type UnwrapNestedRefs<T> = T extends Ref ? T : UnwrapRef<T>;
Vue.use(VueCompositionAPI);

interface TodoItem {
  title: string;
  completed: boolean;
}

interface State {
  todoList: Ref<TodoItem[]>;
}

const state: State = {
  todoList: ref([])
};

export function addTodo(title: string) {
  state.todoList.value.push({ title, completed: false })
}

const readonlyState: { [P in keyof State]: DeepReadonly<UnwrapNestedRefs<State[P]>> } = {
  todoList: readonly(state.todoList)
}
export default readonlyState;
