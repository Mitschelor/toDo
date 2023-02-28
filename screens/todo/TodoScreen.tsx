import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import React, { useLayoutEffect } from 'react'
import { ScrollView, View } from 'react-native'
import AddButton from '../../components/AddButton'
import ToDoItem from '../../components/ToDoItem'
import { todoStore } from '../../store/TodoStore'

const TodoScreen = () => {
  const navigation = useNavigation()

  const addTodo = () =>
    todoStore.addToDo({
      id: Math.random().toString(),
      title: '',
      state: 'icebox',
    })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'My Day',
      headerRight: () => <AddButton onPress={addTodo} />,
    })
  }, [navigation])

  return (
    <View>
      <ScrollView style={{ height: '100%' }}>
        {todoStore.toDos.map((todo) => (
          <ToDoItem
            key={todo.id}
            toDo={todo}
            deleteAction={() => todoStore.removeToDo(todo)}
            toggleAction={() => todoStore.toggleToDo(todo)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default observer(TodoScreen)
