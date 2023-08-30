import { View, Text } from "react-native"
import { homeCSS } from "../styles/homestyle"
import Subject from "../components/Subject"

export default function HomeScreen() {
  const subjectWindow = {
    name: "Mathematics",
    coefficient: 6,
    cc1: 1.5,
    cc2: 2,
    cc3: 2.5,
    cc1Percentage: 183,
    cc2Percentage: 183,
    cc3Percentage: 183,
    total: 183,
    totalPercentage: 183
  }

  return (
    <View style = {homeCSS.container}>
      <Text style = {homeCSS.text}> Home </Text>
      <Subject subjectParams = {subjectWindow} />
    </View>
  )
}