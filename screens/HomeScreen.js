import { View, Text } from "react-native"
import { homeCSS } from "../styles/homestyle"
import Subject from "../components/Subject"

export default function HomeScreen() {
  const subjectProps = {
    name: "Mathematics",
    coefficient: 6,
    CC1Coef: 1.5,
    CC2Coef: 2,
    CC3Coef: 2.5,
  }

  return (
    <View style = {homeCSS.container}>
      <Text style = {homeCSS.text}> Home </Text>
      <Subject subjectProps = {subjectProps} />
    </View>
  )
}