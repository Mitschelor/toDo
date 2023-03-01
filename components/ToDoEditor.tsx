import React, { useState } from 'react'
import { Button, Platform, StyleSheet, TextInput } from 'react-native'
import ToDo from '../model/ToDo'

interface ToDoEditorProps {
  toDo: ToDo
  onFinishCreating: (title: string) => void
}

const ToDoEditor = (props: ToDoEditorProps) => {
  const [title, setTitle] = useState<string>(props.toDo.title)
  return (
    <>
      <TextInput
        onChangeText={setTitle}
        value={title}
        style={styles.inputBox}
        placeholder='New To-Do'
      />
      <Button title='Save' onPress={() => props.onFinishCreating(title)} />
    </>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    paddingLeft: 10,
    flexGrow: 1,
    fontSize: 20,
    ...(Platform.OS === 'android' && {
      paddingVertical: 0,
    }),
  },
})

export default ToDoEditor
