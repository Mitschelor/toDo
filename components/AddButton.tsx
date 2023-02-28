import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

type Props = {
  onPress: () => void
}

const AddButton = (props: Props) => {
  return (
    <View>
      <Icon.Button
        name='plus'
        backgroundColor='white'
        color='black'
        onPress={props.onPress}
      />
    </View>
  )
}

export default AddButton
