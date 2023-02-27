import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
  onPress: () => void
}

const AddButton = (props: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({})
