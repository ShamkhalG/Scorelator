import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Modal } from "react-native"
import { useState } from "react";
import { homeCSS } from "../styles/homestyle"
import { modalCSS } from "../styles/globalstyle";
import { FontAwesome } from '@expo/vector-icons';
import Subject from "../components/Subject"

export default function HomeScreen() {
  const [isAddSubjectModalVisible, setIsAddSubjectModalVisible] = useState(false);
  const [error, setError] = useState(0);

  const [newName, setNewName] = useState("");
  const [newCC1, setNewCC1] = useState(190);
  const [newCC2, setNewCC2] = useState(190);
  const [newCC3, setNewCC3] = useState(190);
  
  const subjectProps = {
    name: "Mathematics",
    get coefficient() {
      let sum = 0;

      if (this.CC1Coef !== 190) {
        sum += this.CC1Coef;
      }

      if (this.CC2Coef !== 190) {
        sum += this.CC2Coef;
      }

      if (this.CC3Coef !== 190) {
        sum += this.CC3Coef;
      }

      return sum;
    },
    CC1Coef: 190,
    CC2Coef: 190,
    CC3Coef: 190,
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
        {/* TODO: Use map function to render all Subject components */}
        <Subject subjectProps = {subjectProps} />

        {/* + button to add a new subject to the list */}
        <TouchableOpacity style = {homeCSS.touchable} onPress = {openAddSubject}>
          <View style = {homeCSS.add}>
            <Text style = {homeCSS.text}>+</Text>
          </View>
        </TouchableOpacity>
      
        {/* Modal window for adding a new subject */}
        <Modal
          visible={isAddSubjectModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeAddSubject}
        >
          <TouchableWithoutFeedback onPress = {keyboardRemover}>
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style = {modalCSS.container}>
                {/* X button to close the modal window */}
                <View style = {modalCSS.closer}>
                  <TouchableOpacity onPress={closeAddSubject}>
                    <FontAwesome name = "close" size = {50} color = "#E5E5E5" />
                  </TouchableOpacity>
                </View>

                {/* Text: "Add a new subject" */}
                <View style = {modalCSS.addingInfo}>
                  <Text style = {modalCSS.addingInfoText}> Add a new subject </Text>
                </View>

                <View style = {modalCSS.inputs}>
                  {/* Input for the name */}
                  <View style = {modalCSS.singleInput}>
                    <Text style = {modalCSS.singleInputText}>Name: </Text>
                    <TextInput 
                      onChangeText = {(enteredName) => {setNewName(enteredName)}}
                      style = {modalCSS.textInputName}
                    />
                  </View>

                  {/* Input for the CC1 coefficient */}
                  <View style = {modalCSS.singleInput}>
                    <Text style = {modalCSS.singleInputText}>CC1 coefficient: </Text>
                    <TextInput 
                      onChangeText = {(enteredCC1) => {setNewCC1(enteredCC1)}}
                      keyboardType = "numeric"
                      style = {modalCSS.textInput}
                    />
                  </View>

                  {/* Input for the CC2 coefficient */}
                  <View style = {modalCSS.singleInput}>
                    <Text style = {modalCSS.singleInputText}>CC2 coefficient: </Text>
                    <TextInput 
                      onChangeText = {(enteredCC2) => {setNewCC2(enteredCC2)}}
                      keyboardType = "numeric"
                      style = {modalCSS.textInput}
                    />
                  </View>
                  
                  {/* Input for the CC3 coefficient */}
                  <View style = {modalCSS.singleInput}>
                    <Text style = {modalCSS.singleInputText}>CC3 coefficient: </Text>
                    <TextInput
                      onChangeText = {(enteredCC3) => {setNewCC3(enteredCC3)}}
                      keyboardType = "numeric"
                      style = {modalCSS.textInput}
                    />
                  </View>

                  {/* Info text about unused coefficients */}
                  <View style = {modalCSS.unusedInfo}>
                    <Text style = {modalCSS.unusedInfoText}> 
                      Info: If a coefficient will not be used, leave it blank. 
                    </Text>
                  </View>

                  {/* Button that adds the new written props to the subject, then closes the modal */}
                  <View style = {{ alignItems: "center" }}>
                    <View style = {modalCSS.addButton}>
                      <TouchableOpacity onPress = {addSubject}>
                        <Text style = {modalCSS.addButtonText}> Add </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  )
}