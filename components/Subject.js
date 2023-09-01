import { View, Text } from "react-native";
import { useState } from "react";
import { subjectCSS } from "../styles/subjectstyle";

export default function Subject({ subjectProps }) {
  const [CC1Score, setCC1Score] = useState(183);
  const [CC2Score, setCC2Score] = useState(183);
  const [CC3Score, setCC3Score] = useState(183);
  
  let computable = {
    cc1Final: 183,
    cc2Final: 183,
    cc3Final: 183,
    cc1Percentage: 183,
    cc2Percentage: 183,
    cc3Percentage: 183,
    total: 183,
    totalPercentage: 183
  }

  return (
    <View style = {subjectCSS.container}>
      <View style = {subjectCSS.top}>
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
          {/* //! TODO: <Text> below is actually an input place for scores */}
          <Text style = {subjectCSS.middleText}> {CC1Score !== 183 ? CC1Score : null} </Text>
          <Text style = {subjectCSS.middleText}> {computable.cc1Final !== 183 ? computable.cc1Final : "?"} / {subjectProps.cc1Coef} </Text>
          <Text style = {subjectCSS.middleText}> {computable.cc1Percentage !== 183 ? computable.cc1Percentage : "?"} % </Text>
        </View>
        
        <View>
          <Text style = {subjectCSS.middleText}> CC2 </Text>
          {/* //! TODO: <Text> below is actually an input place for scores */}
          <Text style = {subjectCSS.middleText}> {CC2Score !== 183 ? CC2Score : null} </Text>
          <Text style = {subjectCSS.middleText}> {computable.cc2Final !== 183 ? computable.cc2Final : "?"} / {subjectProps.cc2Coef} </Text>
          <Text style = {subjectCSS.middleText}> {computable.cc2Percentage !== 183 ? computable.cc2Percentage : "?"} % </Text>
        </View>
        
        <View>
          <Text style = {subjectCSS.middleText}> CC3 </Text>
          {/* //! TODO: <Text> below is actually an input place for scores */}
          <Text style = {subjectCSS.middleText}> {CC3Score !== 183 ? CC3Score : null} </Text>
          <Text style = {subjectCSS.middleText}> {computable.cc3Final !== 183 ? computable.cc3Final : "?"} / {subjectProps.cc3Coef} </Text>
          <Text style = {subjectCSS.middleText}> {computable.cc3Percentage !== 183 ? computable.cc3Percentage : "?"} % </Text>
        </View>
      </View>

      <View style = {subjectCSS.bottom}>
        
      </View>
    </View>
  )
}