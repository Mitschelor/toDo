import { observable, action } from 'mobx'
import { TodoData } from '../screens/todo/TodoScreen'

class TodoStore {
  @observable todos: TodoData[] = []

  @action
  addTodo = (todo: TodoData) => {
    this.todos.push(todo)
  }
}

export default TodoStore
