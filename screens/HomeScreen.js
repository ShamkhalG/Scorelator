import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from "react-native"
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

  const keyboardRemover = () => {
    Keyboard.dismiss();
  }

  const addSubject = () => {
    // TODO: Opens settings, where a subject can be added to the list
    console.log("Opened settings to add subject")
  }

  return (
    <TouchableWithoutFeedback onPress = {keyboardRemover}>
      <View style = {homeCSS.container}>
        {/* REMOVE: Remove "Home" text */}
        <Text style = {homeCSS.homeText}> Home </Text>
        <Subject subjectProps = {subjectProps} />

        {/* TODO: + button to add a subject*/}
        <TouchableOpacity onPress = {addSubject}>
          <View style = {homeCSS.addSubject}>
            <Text style = {homeCSS.text}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

    </TouchableWithoutFeedback>
  )
}