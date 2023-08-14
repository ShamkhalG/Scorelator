import { Text, View } from 'react-native';
import { lockCSS } from '../styles/lockstyle';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function LockScreen() {
  const [firstLog, setFirstLog] = useState(true); // TODO: Create a database, where this variable will be stored
  const [pin, setPin] = useState("");
  
  return (
    <View style = {lockCSS.container}>
      <StatusBar backgroundColor = '#E5E5E5' />
      <View>
        {firstLog ? 
          ( <Text style = {lockCSS.pinText}> Define a pin code </Text> ) 
        : 
          ( <Text style = {lockCSS.pinText}> Enter the pin </Text> )
        }

        {/* //TODO: Implement pin code lock */}
      </View>
    </View>
  );
}