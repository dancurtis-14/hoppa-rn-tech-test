import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'

import Forecast from '../../screens/Forecast'
import ForecastDetails from '../../screens/ForecastDetails'

const Stack = createStackNavigator()

export default function RootNavigation (props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Forecast' component={Forecast} />
        <Stack.Screen
          name='Forecast Details' component={ForecastDetails}
          options={({ route }) => { return { title: route.params.date, headerBackTitle: 'Back' } }}
        />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
