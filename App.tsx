/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import BackLogScreen from './screens/todo/BackLogScreen'
import TodoScreen from './screens/todo/TodoScreen'

const Tab = createBottomTabNavigator()
const sunIcon = () => <Icon name='sun' size={20} color='black' />
const listIcon = () => <Icon name='list' size={20} color='black' />

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='My Day'
          component={TodoScreen}
          options={{
            tabBarIcon: sunIcon,
          }}
        />
        <Tab.Screen
          name='Backlog'
          component={BackLogScreen}
          options={{
            tabBarIcon: listIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
