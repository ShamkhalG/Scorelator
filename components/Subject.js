import { View, Text } from "react-native";
import { homeCSS } from "../styles/homestyle";

export default function Subject({ subjectParams }) {
  return (
    <View>
      <Text style = {homeCSS.text}> Subject Name: {subjectParams.name} </Text>
      <Text style = {homeCSS.text}> Coefficient: {subjectParams.coefficient} </Text>
    </View>
  )
}