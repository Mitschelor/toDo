import { action, makeObservable, observable } from 'mobx'
import ToDo from '../model/ToDo'

class TodoStore {
  @observable toDos: ToDo[] = []

  constructor() {
    makeObservable(this)
  }

  @action
  public addToDo = (todo: ToDo) => {
    this.toDos.push(todo)
  }

  @action
  public removeToDo = (todo: ToDo) => {
    this.toDos = this.toDos.filter((item) => item.id !== todo.id)
  }

  @action
  public toggleToDo = (todo: ToDo) => {
    this.updateToDo(todo, {
      state: todo.state === 'icebox' ? 'done' : 'icebox',
    })
  }

  @action
  public updateToDoTitle = (todo: ToDo, title: string) => {
    this.updateToDo(todo, { title })
  }

  @action
  public updateToDo = (todo: ToDo, changes: Partial<ToDo>) => {
    const updatedToDo: ToDo = {
      ...todo,
      ...changes,
    }
    const updatedList = this.toDos.map((item) =>
      item.id === todo.id ? updatedToDo : item
    )
    this.toDos = updatedList
  }
}

export const todoStore = new TodoStore()

export default TodoStore
