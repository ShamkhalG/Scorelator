import { View, Text } from "react-native";
import { subjectCSS } from "../styles/subjectstyle";

export default function Subject({ subjectProps }) {
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

      <View>
        
      </View>

      <View>
        
      </View>
    </View>
  )
}