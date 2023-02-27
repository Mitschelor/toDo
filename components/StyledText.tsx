import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Appearance } from 'react-native'

type Props = {
  children: React.ReactNode
  style?: any
}

const StyledText = (props: Props) => (
  <View>
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  </View>
)

const isDarkMode = Appearance.getColorScheme() === 'dark'

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    color: isDarkMode ? 'white' : 'black',
  },
})

export default StyledText
