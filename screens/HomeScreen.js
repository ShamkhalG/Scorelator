import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Modal } from "react-native"
import { useState } from "react";
import { homeCSS } from "../styles/homestyle"
import { FontAwesome } from '@expo/vector-icons'; 
import Subject from "../components/Subject"

export default function HomeScreen() {
  const [isAddSubjectModalVisible, setIsAddSubjectModalVisible] = useState(false);
  const [newName, setNewName] = useState("Hello");
  const [newCC1, setNewCC1] = useState(190); // 190 indicates that the coefficient won't be used
  const [newCC2, setNewCC2] = useState(190);
  const [newCC3, setNewCC3] = useState(190);
  
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
    // REMOVE: Console.log
    console.log("Opened add subject.")
  }
  
  const closeAddSubject = () => {
    setIsAddSubjectModalVisible(false);
    // REMOVE: Console.log
    console.log("Closed add subject.")
  }
  
  const addSubject = () => {
    // TODO: Adds the subject to the database, then closes the model
    // IMPORTANT: It should pass the type check (no additional characters like strings, only numbers)
    // REMOVE: Console.log
    console.log("Added the subject to the database...");
    console.log("Name: " + newName);
    console.log("CC1 coefficient: " + newCC1);
    console.log("CC2 coefficient: " + newCC2);
    console.log("CC3 coefficient: " + newCC3);
    setIsAddSubjectModalVisible(false);
  }

  return (
    <TouchableWithoutFeedback onPress = {keyboardRemover}>
      <View style = {homeCSS.container}>
        {/* REMOVE: Remove "Home" text */}
        <Text style = {homeCSS.homeText}> Home </Text>
        <Subject subjectProps = {subjectProps} />

        {/* + button to add a new subject to the list */}
        <TouchableOpacity style = {homeCSS.touchable} onPress = {openAddSubject}>
          <View style = {homeCSS.add}>
            <Text style = {homeCSS.text}>+</Text>
          </View>
        </TouchableOpacity>
      
        {/* Window for adding a new subject */}
        <Modal
          visible={isAddSubjectModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeAddSubject}
        >
          <TouchableWithoutFeedback onPress = {keyboardRemover}>
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style = {homeCSS.modalContainer}>
                <View style = {homeCSS.modalCloser}>
                  <TouchableOpacity onPress={closeAddSubject}>
                    <FontAwesome name = "close" size = {50} color = "#E5E5E5" />
                  </TouchableOpacity>
                </View>

                <View style = {homeCSS.addingInfo}>
                  <Text style = {homeCSS.addingInfoText}> Add a new subject </Text>
                </View>

                <View style = {homeCSS.modalInputs}>
                  <View style = {homeCSS.modalSingleInput}>
                    <Text style = {homeCSS.modalSingleInputText}>Name: </Text>
                    <TextInput 
                      onChangeText = {(enteredName) => {setNewName(enteredName)}}
                      style = {homeCSS.modalTextInputName}
                    />
                  </View>

                  <View style = {homeCSS.modalSingleInput}>
                    <Text style = {homeCSS.modalSingleInputText}>CC1 coefficient: </Text>
                    <TextInput 
                      onChangeText = {(enteredCC1) => {setNewCC1(enteredCC1)}}
                      keyboardType = "numeric"
                      style = {homeCSS.modalTextInput}
                    />
                  </View>

                  <View style = {homeCSS.modalSingleInput}>
                    <Text style = {homeCSS.modalSingleInputText}>CC2 coefficient: </Text>
                    <TextInput 
                      onChangeText = {(enteredCC2) => {setNewCC2(enteredCC2)}}
                      keyboardType = "numeric"
                      style = {homeCSS.modalTextInput}
                    />
                  </View>
                  
                  <View style = {homeCSS.modalSingleInput}>
                    <Text style = {homeCSS.modalSingleInputText}>CC3 coefficient: </Text>
                    <TextInput
                      onChangeText = {(enteredCC3) => {setNewCC3(enteredCC3)}}
                      keyboardType = "numeric"
                      style = {homeCSS.modalTextInput}
                    />
                  </View>

                  {/* Info text about unused coefficients */}
                  <View style = {homeCSS.unusedInfo}>
                    <Text style = {homeCSS.unusedInfoText}> 
                      Info: If a coefficient will not be used, leave it blank. 
                    </Text>
                  </View>

                  {/* Button that adds the new written props to the subject, then closes the modal */}
                  <View style = {{ alignItems: "center" }}>
                    <View style = {homeCSS.addButton}>
                      <TouchableOpacity onPress = {addSubject}>
                        <Text style = {homeCSS.addButtonText}> Add </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* IMPORTANT: Give info about leaving a coefficient blank if it won't be used */}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  )
}