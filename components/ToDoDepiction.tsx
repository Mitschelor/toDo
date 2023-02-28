import React from 'react'
import {
  Button,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import ToDo from '../model/ToDo'
import StyledText from './StyledText'

interface ToDoDepictionProps {
  toDo: ToDo
  toggleAction: () => void
  deleteAction: () => void
}

const ToDoDepiction = (props: ToDoDepictionProps) => {
  let icon: ImageSourcePropType
  if (props.toDo.state === 'done') {
    icon = require('../assets/images/icons/done.png')
  } else {
    icon = require('../assets/images/icons/icebox.png')
  }

  return (
    <>
      <TouchableOpacity onPress={props.toggleAction}>
        <Image style={styles.image} source={icon} />
      </TouchableOpacity>
      <StyledText style={styles.title}>{props.toDo.title}</StyledText>
      <Button onPress={props.deleteAction} title='Delete' />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginVertical: 10,
  },
  title: {
    paddingLeft: 10,
    flexGrow: 1,
    fontSize: 20,
  },
})

export default ToDoDepiction
