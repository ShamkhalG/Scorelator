import { useEffect, useState, useRef } from 'react';
import { Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import PinView from 'react-native-pin-view';
import { lockCSS } from '../styles/lockstyle';
import { StatusBar } from 'expo-status-bar';

export default function LockScreen() {
  const [firstLog, setFirstLog] = useState(true); // TODO: Create a database, where this variable will be stored
  const [correctPin, setCorrectPin] = useState("2003"); // TODO: This pin must be set from a database
  const [correctPinText, setCorrectPinText] = useState(false);
  const [falsePinText, setFalsePinText] = useState(false);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const pinView = useRef(null);
  
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }

    if (enteredPin.length === 4) { //? TODO: If firstLog is true, then it should set the new pin
      if (enteredPin === correctPin) {
        setFalsePinText(false);
        setCorrectPinText(true); // TODO: It should jump to the home page with all subjects
      } else {
        setCorrectPinText(false);
        setFalsePinText(true); //! FIXME: It should remove all circles and reset the pin
      }
    }
  }, [enteredPin])

  return (
    <View style = {lockCSS.container}>
      <StatusBar backgroundColor = '#E5E5E5' />
      <View>
        {firstLog ? 
          ( <Text style = {lockCSS.pinText}> Define a pin code </Text> ) 
        : 
          ( <Text style = {lockCSS.pinText}> Enter the pin </Text> )
        }

        {correctPinText ? (<Text style = {lockCSS.pinText}> Correct Pin entered </Text>) : undefined}
        {falsePinText ? (<Text style = {lockCSS.pinText}> Incorrect Pin entered </Text>) : undefined}

        {/* //TODO: Implement pin code lock */}
        <PinView 
          pinLength={4}
          ref = {pinView}
          onValueChange = {(value) => setEnteredPin(value)}
          onButtonPress = {key => {
            if (key === "custom_right"){
              pinView.current.clear()
            }
          }}
          customRightButton = {showRemoveButton ? <Icon name = {"ios-backspace"} size = {36} color = {"#FFF"} /> : undefined}
        />
      </View>
    </View>
  );
}