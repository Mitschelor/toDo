interface ToDo {
  id: string
  title: string
  state: ToDoState
}

export type ToDoState = 'icebox' | 'done'

export default ToDo
