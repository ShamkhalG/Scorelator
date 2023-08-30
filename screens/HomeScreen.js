import { View, Text } from "react-native"
import { homeCSS } from "../styles/homestyle"
import Subject from "../components/Subject"

export default function HomeScreen() {
  const subjectProps = {
    name: "Mathematics",
    coefficient: 6,
    cc1Score: 183,
    cc2Score: 0,
    cc3Score: 10,
    cc1Coef: 1.5,
    cc2Coef: 2,
    cc3Coef: 2.5,
  }

  return (
    <View style = {homeCSS.container}>
      <Text style = {homeCSS.text}> Home </Text>
      <Subject subjectProps = {subjectProps} />
    </View>
  )
}