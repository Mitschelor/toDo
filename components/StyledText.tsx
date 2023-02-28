import React from 'react'
import { Appearance, StyleSheet, Text } from 'react-native'

interface Props {
  children: React.ReactNode
  style?: any
}

const StyledText = (props: Props) => (
  <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
)

const isDarkMode = Appearance.getColorScheme() === 'dark'

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: isDarkMode ? 'white' : 'black',
  },
})

export default StyledText
