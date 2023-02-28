import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

type Props = {
  onPress: () => void
}

const AddButton = (props: Props) => {
  return (
    <View>
      <Icon.Button name='plus' backgroundColor='white' color='black' />
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({})
