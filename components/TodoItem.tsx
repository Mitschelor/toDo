import {
  Image,
  ImageComponent,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Title from './Title'
import StyledText from './StyledText'

export type TodoProps = {
  title: string
  description: string
  dueDate: number
  isCreating: boolean
  deleteAction: (index: number) => void
}

type TodoState = 'done' | 'icebox'

const TodoItem = (props: TodoProps) => {
  const dueDate = new Date(props.dueDate).toLocaleDateString('ge-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const [todoState, setTodoState] = useState<TodoState>('icebox')
  const [isCreating, setIsCreating] = useState<boolean>(props.isCreating)
  const [title, setTitle] = useState<string>(props.title)

  let imageURL: ImageSourcePropType
  if (todoState === 'done') {
    imageURL = require('../assets/images/icons/done.png')
  } else {
    imageURL = require('../assets/images/icons/icebox.png')
  }

  const toggleTodoState = () => {
    if (todoState === 'done') {
      setTodoState('icebox')
    } else {
      setTodoState('done')
    }
  }

  return isCreating ? (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <TextInput
          onChangeText={setTitle}
          value={title}
          style={{ ...styles.title, paddingLeft: 10, width: '100%' }}
          placeholder='New Todo'
          keyboardType='default'
        />
        <TouchableOpacity
          style={{
            marginRight: 10,
            marginLeft: 'auto',
          }}
          onPress={() => setIsCreating(false)}
        >
          <StyledText>Save</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTodoState}>
        <Image style={styles.image} source={imageURL} />
      </TouchableOpacity>
      <View style={styles.todoContainer}>
        <StyledText style={styles.title}>{title}</StyledText>
      </View>
      <TouchableOpacity onPress={() => props.deleteAction}>
        <StyledText>Delete</StyledText>
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginVertical: 10,
  },
  title: {},
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingVertical: 10,
    fontSize: 20,
  },
})
