import { StyleSheet, } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuantityMeasurement from './components/QuantityMeasurement'
import Temperature from './components/Temperature';
import Length from './components/Length';
import Weight from './components/Weight';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component = {SignUp} />
        <Stack.Screen name="SignIn" component = {SignIn} />
        <Stack.Screen name="Quantity Measurement" component={QuantityMeasurement} />
        <Stack.Screen name ="Temperature" component={Temperature} />
        <Stack.Screen name ="Length" component={Length} />
        <Stack.Screen name="Weight" component={Weight} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})