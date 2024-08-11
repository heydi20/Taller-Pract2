import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { LoginScreen } from './src/screen/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/screen/navigator/StackNavigator';
 const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}
export default App
