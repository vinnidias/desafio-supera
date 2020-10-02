import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ShopScreen from './src/screens/ShopScreen'
import CartScreen from './src/screens/CartScreen'

const Stack = createStackNavigator() 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'ShopScreen'} screenOptions={{headerShown: false}}>
        <Stack.Screen name='ShopScreen'  component= {ShopScreen} />
        <Stack.Screen name='CartScreen'  component= {CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
