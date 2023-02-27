import { Appearance, StyleSheet, View } from 'react-native'
import React from 'react'
import StyledText from './StyledText'

type Props = {
  children: React.ReactNode
}

const Title = (props: Props) => {
  return (
    <View>
      <StyledText style={styles.text}>{props.children}</StyledText>
    </View>
  )
}

export default Title

const isDarkMode = Appearance.getColorScheme() === 'dark'

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    padding: 10,
    backgroundColor: isDarkMode ? 'darkblue' : 'lightblue',
  },
})
