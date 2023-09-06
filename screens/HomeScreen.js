import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Modal } from "react-native"
import { useState } from "react";
import { homeCSS } from "../styles/homestyle"
import Subject from "../components/Subject"

export default function HomeScreen() {
  const [isAddSubjectModalVisible, setIsAddSubjectModalVisible] = useState(false);
  
  const subjectProps = {
    name: "Mathematics",
    get coefficient() {
      return this.CC1Coef + this.CC2Coef + this.CC3Coef;
    },
    CC1Coef: 1.5,
    CC2Coef: 2,
    CC3Coef: 2.5,
  }

  const keyboardRemover = () => {
    Keyboard.dismiss();
  }

  const openAddSubject = () => {
    setIsAddSubjectModalVisible(true);
    console.log("Opened add subject.")
  }
  
  const closeAddSubject = () => {
    setIsAddSubjectModalVisible(false);
    console.log("Closed add subject.")
  }
  
  const addSubject = () => {
    // TODO: Adds the subject to the database, then closes the model
    console.log("Added the subject to the database...")
    setIsAddSubjectModalVisible(false);
  }

  return (
    <TouchableWithoutFeedback onPress = {keyboardRemover}>
      <View style = {homeCSS.container}>
        {/* REMOVE: Remove "Home" text */}
        <Text style = {homeCSS.homeText}> Home </Text>
        <Subject subjectProps = {subjectProps} />

        {/* TODO: + button to add a subject*/}
        <TouchableOpacity style = {homeCSS.touchable} onPress = {openAddSubject}>
          <View style = {homeCSS.add}>
            <Text style = {homeCSS.text}>+</Text>
          </View>
        </TouchableOpacity>
      
        <Modal
          visible={isAddSubjectModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeAddSubject}
        >
          <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style = {{ backgroundColor: 'white', width: '90%', height: '90%' }}>
              <Text>This is your modal content.</Text>
              <TouchableOpacity onPress={closeAddSubject}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  )
}