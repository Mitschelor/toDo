/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import type { PropsWithChildren } from 'react'
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import TodoScreen from './screens/todo/TodoScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BackLogScreen from './screens/todo/BackLogScreen'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
