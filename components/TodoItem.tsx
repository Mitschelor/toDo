import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ToDo from '../model/ToDo'
import { todoStore } from '../store/TodoStore'
import ToDoDepiction from './ToDoDepiction'
import ToDoEditor from './ToDoEditor'

export interface ToDoProps {
  toDo: ToDo
  toggleAction: () => void
  deleteAction: () => void
}

const ToDoItem = (props: ToDoProps) => {
  const [isCreating, setIsCreating] = useState<boolean>(props.toDo.title === '')

  const saveToDo = (title: string) => {
    todoStore.updateToDoTitle(props.toDo, title)
  }

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        {isCreating ? (
          <ToDoEditor
            toDo={props.toDo}
            onFinishCreating={(title) => {
              saveToDo(title)
              setIsCreating(false)
            }}
          />
        ) : (
          <ToDoDepiction
            toDo={props.toDo}
            deleteAction={props.deleteAction}
            toggleAction={props.toggleAction}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 54,
    alignItems: 'center',
  },
  todoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
})

export default ToDoItem
