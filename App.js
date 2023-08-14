import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LockScreen from './screens/LockScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false }}>
        <Stack.Screen name = "LockScreen" component = {LockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}