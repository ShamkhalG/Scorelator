import { View, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { subjectCSS } from "../styles/subjectstyle";

export default function Subject({ subjectProps }) {
  // Values from inputs
  const [CC1Score, setCC1Score] = useState(183);
  const [CC2Score, setCC2Score] = useState(183);
  const [CC3Score, setCC3Score] = useState(183);

  // Computable values
  const [CC1Final, setCC1Final] = useState(183);
  const [CC1Percentage, setCC1Percentage] = useState(183);
  
  const [CC2Final, setCC2Final] = useState(183);
  const [CC2Percentage, setCC2Percentage] = useState(183);
  
  const [CC3Final, setCC3Final] = useState(183);
  const [CC3Percentage, setCC3Percentage] = useState(183);
  
  const [total, setTotal] = useState(183);
  const [totalPercentage, setTotalPercentage] = useState(183);

  useEffect(() => {
    // Calculate CC1 points
    if (CC1Score !== 183) {
      const newCC1Final = (CC1Score / 20) * subjectProps.CC1Coef;
      const newCC1Percentage = (newCC1Final / subjectProps.CC1Coef) * 100;
      setCC1Final(newCC1Final);
      setCC1Percentage(newCC1Percentage);
    } else {
      setCC1Final(183);
      setCC1Percentage(183);
    }

    // Calculate CC2 points
    if (CC2Score !== 183) {
      const newCC2Final = (CC2Score / 20) * subjectProps.CC2Coef;
      const newCC2Percentage = (newCC2Final / subjectProps.CC2Coef) * 100;
      setCC2Final(newCC2Final);
      setCC2Percentage(newCC2Percentage);
    } else {
      setCC2Final(183);
      setCC2Percentage(183);
    }

    // Calculate CC3 points
    if (CC3Score !== 183) {
      const newCC3Final = (CC3Score / 20) * subjectProps.CC3Coef;
      const newCC3Percentage = (newCC3Final / subjectProps.CC3Coef) * 100;
      setCC3Final(newCC3Final);
      setCC3Percentage(newCC3Percentage);
    } else {
      setCC3Final(183);
      setCC3Percentage(183);
    }

    // Calculate the total received points out of subject coefficient
    if (CC1Score !== 183 || CC2Score !== 183 || CC3Score !== 183) {
      let newTotal = 0;

      if (CC1Score !== 183) {
        newTotal += CC1Final;
      }

      if (CC2Score !== 183) {
        newTotal += CC2Final;
      }

      if (CC3Score !== 183) {
        newTotal += CC3Final;
      }

      if (newTotal === 0) {
        newTotal = 183;
      }

      setTotal(newTotal);
    } else {
      setTotal(183);
    }

    // Calculate percentage of total points out of subject coefficient
    if (total !== 183) {
      const newTotalPercentage = (total / subjectProps.coefficient) * 100;
      
      const formattedTotalPercentage = Number.isInteger(newTotalPercentage)
      ? newTotalPercentage.toString() // Convert to string to remove decimal point
      : newTotalPercentage.toFixed(2); // Keep two decimal places for non-integer values

      setTotalPercentage(formattedTotalPercentage);
    } else {
      setTotalPercentage(183);
    }
  }, [CC1Score, CC2Score, CC3Score, CC1Final, CC2Final, CC3Final, total]);

  const CC1Handler = (CC1result) => {
    CC1result = CC1result.replace(/[^0-9]/g, '');
    if (CC1result === ""){
      setCC1Score(183);  
    } else {
      setCC1Score(CC1result);
    }
  }

  const CC2Handler = (CC2result) => {
    CC2result = CC2result.replace(/[^0-9]/g, '');
    if (CC2result === ""){
      setCC2Score(183);  
    } else {
      setCC2Score(CC2result); 
    }
  }

  const CC3Handler = (CC3result) => {
    CC3result = CC3result.replace(/[^0-9]/g, '');
    if (CC3result === ""){
      setCC3Score(183);  
    } else {
      setCC3Score(CC3result); 
    }
  }

  return (
    <View style = {subjectCSS.container}>
      <View style = {subjectCSS.top}>
        {/* //? FIXME: If the name is too long, it might not fit in the table */}
        <Text style = {subjectCSS.topText}> {subjectProps.name} </Text>
        <View style = {subjectCSS.topRight}>
          <Text style = {subjectCSS.topText}> {subjectProps.coefficient} </Text>
          {/* //! TODO: <Text> below is actually a button to the settings of a subject */}
          <Text style = {subjectCSS.topText}> S </Text>
        </View>
      </View>

      <View style = {subjectCSS.middle}>
        <View>
          <Text style = {subjectCSS.middleText}> CC1 </Text>
          <TextInput 
            onChangeText = {CC1Handler}
            keyboardType = "numeric"
          />
          <Text style = {subjectCSS.middleText}> {CC1Final !== 183 ? CC1Final : "?"} / {subjectProps.CC1Coef} </Text>
          <Text style = {subjectCSS.middleText}> {CC1Percentage !== 183 ? CC1Percentage : "?"} % </Text>
        </View>
        
        <View>
          <Text style = {subjectCSS.middleText}> CC2 </Text>
          <TextInput 
            onChangeText = {CC2Handler}
            keyboardType = "numeric"
          />
          <Text style = {subjectCSS.middleText}> {CC2Final !== 183 ? CC2Final : "?"} / {subjectProps.CC2Coef} </Text>
          <Text style = {subjectCSS.middleText}> {CC2Percentage !== 183 ? CC2Percentage : "?"} % </Text>
        </View>
        
        <View>
          <Text style = {subjectCSS.middleText}> CC3 </Text>
          <TextInput 
            onChangeText = {CC3Handler}
            keyboardType = "numeric"
          />
          <Text style = {subjectCSS.middleText}> {CC3Final !== 183 ? CC3Final : "?"} / {subjectProps.CC3Coef} </Text>
          <Text style = {subjectCSS.middleText}> {CC3Percentage !== 183 ? CC3Percentage : "?"} % </Text>
        </View>
      </View>

      <View style = {subjectCSS.bottom}>
        <Text style = {subjectCSS.bottomText}> Total: {total !== 183 ? total : "?"} / {subjectProps.coefficient} ({totalPercentage !== 183 ? totalPercentage : "?"}%) </Text>
      </View>
    </View>
  )
}