import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import AddButton from '../../components/AddButton'
import StyledText from '../../components/StyledText'
import Title from '../../components/Title'
import TodoItem, { TodoProps } from '../../components/TodoItem'

const getAddButton = (onPress: () => void) => <AddButton onPress={onPress} />

type TodoData = Omit<TodoProps, 'deleteAction'>

function TodoScreen() {
  const navigation = useNavigation()
  const [todos, setTodos] = useState<TodoData[]>([])

  const deleteAction = (index: number) => {
    todos.splice(index, 1)
    setTodos([...todos])
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'My Day',
      headerRight: () =>
        getAddButton(() => {
          todos.push({
            title: '',
            description: '',
            dueDate: new Date().getTime(),
            isCreating: true,
          })
          setTodos([...todos])
        }),
    })
  })

  return (
    <View>
      <ScrollView style={{ height: '100%' }}>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            isCreating={todo.isCreating}
            deleteAction={(e) => deleteAction(e)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default TodoScreen
