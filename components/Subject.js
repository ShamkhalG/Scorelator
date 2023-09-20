import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { subjectCSS } from "../styles/subjectstyle";
import { modalCSS } from "../styles/globalstyle";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Subject({ subjectProps }) {
  // TODO: Add warning about valid scores being from 0 to 20
  // Values from inputs
  const [CC1Score, setCC1Score] = useState(183);
  const [CC2Score, setCC2Score] = useState(183);
  const [CC3Score, setCC3Score] = useState(183);

  // Computable values
  const [CC1Final, setCC1Final] = useState(183);
  const [CC1Percentage, setCC1Percentage] = useState(183);
  
  const [CC2Final, setCC2Final] = useState(183);
  const [CC2Percentage, setCC2Percentage] = useState(183);
  
  const [CC3Final, setCC3Final] = useState(183);
  const [CC3Percentage, setCC3Percentage] = useState(183);
  
  const [total, setTotal] = useState(183);
  const [totalPercentage, setTotalPercentage] = useState(183);

  // Modal visibility state
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Updated values
  const [currentCC1, setCurrentCC1] = useState(subjectProps.CC1Coef !== 0 ? subjectProps.CC1Coef.toString() : "");
  const [currentCC2, setCurrentCC2] = useState(subjectProps.CC2Coef !== 0 ? subjectProps.CC2Coef.toString() : "");
  const [currentCC3, setCurrentCC3] = useState(subjectProps.CC3Coef !== 0 ? subjectProps.CC3Coef.toString() : "");
  const [currentName, setCurrentName] = useState(subjectProps.name);

  // Confirmation state
  const [deletionConfirm, setDeletionConfirm] = useState(0);

  useEffect(() => {
    // Calculates CC1 score and percentage
    if (CC1Score !== 183 && subjectProps.CC1Coef !== 0) {
      const newCC1Final = (CC1Score / 20) * subjectProps.CC1Coef;
      const newCC1Percentage = (newCC1Final / subjectProps.CC1Coef) * 100;

      // Round the values to two decimal places if required
      const formattedCC1Final = newCC1Final % 1 === 0 ? parseFloat(newCC1Final.toFixed(0)) : parseFloat(newCC1Final.toFixed(3));
      const formattedCC1Percentage = newCC1Percentage % 1 === 0 ? parseFloat(newCC1Percentage.toFixed(0)) : parseFloat(newCC1Percentage.toFixed(2));

      setCC1Final(formattedCC1Final);
      setCC1Percentage(formattedCC1Percentage);
    } else {
      setCC1Score(183);
      setCC1Final(183);
      setCC1Percentage(183);
    }

    // Calculates CC2 score and percentage
    if (CC2Score !== 183 && subjectProps.CC2Coef !== 0) {
      const newCC2Final = (CC2Score / 20) * subjectProps.CC2Coef;
      const newCC2Percentage = (newCC2Final / subjectProps.CC2Coef) * 100;

      // Round the values to two decimal places
      const formattedCC2Final = newCC2Final % 1 === 0 ? parseFloat(newCC2Final.toFixed(0)) : parseFloat(newCC2Final.toFixed(3));
      const formattedCC2Percentage = newCC2Percentage % 1 === 0 ? parseFloat(newCC2Percentage.toFixed(0)) : parseFloat(newCC2Percentage.toFixed(2));

      setCC2Final(formattedCC2Final);
      setCC2Percentage(formattedCC2Percentage);
    } else {
      setCC2Score(183);
      setCC2Final(183);
      setCC2Percentage(183);
    }

    // Calculates CC3 score and percentage
    if (CC3Score !== 183 && subjectProps.CC3Coef !== 0) {
      const newCC3Final = (CC3Score / 20) * subjectProps.CC3Coef;
      const newCC3Percentage = (newCC3Final / subjectProps.CC3Coef) * 100;

      // Round the values to two decimal places
      const formattedCC3Final = newCC3Final % 1 === 0 ? parseFloat(newCC3Final.toFixed(0)) : parseFloat(newCC3Final.toFixed(3));
      const formattedCC3Percentage = newCC3Percentage % 1 === 0 ? parseFloat(newCC3Percentage.toFixed(0)) : parseFloat(newCC3Percentage.toFixed(2));

      setCC3Final(formattedCC3Final);
      setCC3Percentage(formattedCC3Percentage);
    } else {
      setCC3Score(183);
      setCC3Final(183);
      setCC3Percentage(183);
    }

    // Calculates total points out of subject coefficient
    if (CC1Score !== 183 || CC2Score !== 183 || CC3Score !== 183) {
      let newTotal = 0;

      if (CC1Score !== 183 && subjectProps.CC1Coef !== 0) {
        newTotal += CC1Final;
      }

      if (CC2Score !== 183 && subjectProps.CC2Coef !== 0) {
        newTotal += CC2Final;
      }

      if (CC3Score !== 183 && subjectProps.CC3Coef !== 0) {
        newTotal += CC3Final;
      }

      if (newTotal === 0) {
        newTotal = 183;
      }

      const formattedNewTotal = newTotal % 1 === 0 ? parseFloat(newTotal.toFixed(0)) : parseFloat(newTotal.toFixed(3))

      setTotal(formattedNewTotal);
    } else {
      setTotal(183);
    }

    // Calculate total percentage from total points
    if (total !== 183) {
      const newTotalPercentage = (total / subjectProps.coefficient) * 100;
      
      const formattedTotalPercentage = newTotalPercentage % 1 === 0 ? parseFloat(newTotalPercentage.toFixed(0)) : parseFloat(newTotalPercentage.toFixed(2));

      setTotalPercentage(formattedTotalPercentage);
    } else {
      setTotalPercentage(183);
    }
  }, [CC1Score, CC2Score, CC3Score, CC1Final, CC2Final, CC3Final, total, subjectProps]);

  const CC1Handler = (CC1result) => {
    if (CC1result === ""){
      setCC1Score(183);  
    } else {
      setCC1Score(CC1result);
    }
  }

  const CC2Handler = (CC2result) => {
    if (CC2result === ""){
      setCC2Score(183);  
    } else {
      setCC2Score(CC2result); 
    }
  }

  const CC3Handler = (CC3result) => {
    if (CC3result === ""){
      setCC3Score(183);  
    } else {
      setCC3Score(CC3result); 
    }
  }

  // Subject change settings
  const openSetting = () => {
    // TODO: It should pass subjectProps to the new window
    // REMOVE: Console.log
    console.log("Opened settings.");
    setIsModalVisible(true);
  };

  const closeSetting = () => {
    // REMOVE: Console.log
    console.log("Closed settings.");
    setDeletionConfirm(0);
    setIsModalVisible(false);
  };
  
  // Property change handlers
  const nameChangeHandler = (enteredName) => {
    setCurrentName(enteredName);
  }

  const CC1ChangeHandler = (enteredCC1Coef) => {
    setCurrentCC1(enteredCC1Coef);
  }

  const CC2ChangeHandler = (enteredCC2Coef) => {
    setCurrentCC2(enteredCC2Coef);
  }

  const CC3ChangeHandler = (enteredCC3Coef) => {
    setCurrentCC3(enteredCC3Coef);
  }

  const changeSubject = () => {
    // TODO: It should be able to pass updated subjectProps back to Subject component
    // REMOVE: Console.log
    console.log("Changed subject settings. Closing the window");
    console.log("Name: " + currentName);
    console.log("CC1 coefficient: " + currentCC1);
    console.log("CC2 coefficient: " + currentCC2);
    console.log("CC3 coefficient: " + currentCC3);

    subjectProps.name = currentName;
    subjectProps.CC1Coef = parseFloat(currentCC1);
    subjectProps.CC2Coef = parseFloat(currentCC2);
    subjectProps.CC3Coef = parseFloat(currentCC3);
    closeSetting();
  }

  const deleteSubject = () => {
    // TODO: It should be able to delete the subject from the list
    // REMOVE: Console.log
    console.log("Oops. Accidentally deleted the subject. Closing all modal windows.");
    closeSetting();
  }

  const keyboardRemover = () => {
    Keyboard.dismiss();
  }

  return (
    <View style = {subjectCSS.container}>
      <View style = {subjectCSS.top}>
        {/* QUESTION: If the name is too long, it might not fit in the table */}
        <Text style = {subjectCSS.topText}> {subjectProps.name} </Text>
        <View style = {subjectCSS.topRight}>
          <Text style = {subjectCSS.topText}> {subjectProps.coefficient} </Text>
          <View style={subjectCSS.setting}>
            <TouchableOpacity onPress = {openSetting}>
              <MaterialIcons name="settings" size={28} color="#E5E5E5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style = {subjectCSS.middle}>
        <View style = {subjectCSS.middleView}>
          <Text style = {subjectCSS.middleText}> CC1 </Text>

          {subjectProps.CC1Coef === 0 ? (
            <View>
              <Text style = {subjectCSS.xletter}> X </Text>
            </View>
          ) : (
            <View>
              <TextInput 
                onChangeText = {CC1Handler}
                keyboardType = "numeric"
                style = {subjectCSS.middleInput}
              />

              <Text style = {[subjectCSS.middleText, {marginTop: 5}]}> <Text style = {{ color: "#51CC8F" }}>{CC1Final !== 183 ? CC1Final : "?"}</Text> / {subjectProps.CC1Coef} </Text>
              <Text style = {subjectCSS.middleText}> {CC1Percentage !== 183 ? CC1Percentage : "?"} % </Text>
            </View>
          )}
        </View>
        
        <View style = {subjectCSS.middleView}>
          <Text style = {subjectCSS.middleText}> CC2 </Text>
          
          {subjectProps.CC2Coef === 0 ? (
            <View>
              <Text style = {subjectCSS.xletter}> X </Text>
            </View>
          ) : (
            <View>
              <TextInput 
                onChangeText = {CC2Handler}
                keyboardType = "numeric"
                style = {subjectCSS.middleInput}
              />

              <Text style = {[subjectCSS.middleText, {marginTop: 5}]}> <Text style = {{ color: "#51CC8F" }}>{CC2Final !== 183 ? CC2Final : "?"}</Text> / {subjectProps.CC2Coef} </Text>
              <Text style = {subjectCSS.middleText}> {CC2Percentage !== 183 ? CC2Percentage : "?"} % </Text>
            </View>
          )}
        </View>
        
        <View style = {subjectCSS.middleView}>
          <Text style = {subjectCSS.middleText}> CC3 </Text>
          
          {subjectProps.CC3Coef === 0 ? (
            <View>
              <Text style = {subjectCSS.xletter}> X </Text>
            </View>
          ) : (
            <View>
              <TextInput 
                onChangeText = {CC3Handler}
                keyboardType = "numeric"
                style = {subjectCSS.middleInput}
              />
              
              <Text style = {[subjectCSS.middleText, {marginTop: 5}]}> <Text style = {{ color: "#51CC8F" }}>{CC3Final !== 183 ? CC3Final : "?"}</Text> / {subjectProps.CC3Coef} </Text>
              <Text style = {subjectCSS.middleText}> {CC3Percentage !== 183 ? CC3Percentage : "?"} % </Text>
            </View>
          )}
        </View>
      </View>

      <View style = {subjectCSS.bottom}>
        <Text style = {subjectCSS.bottomText}> Total: {total !== 183 ? total : "?"} / {subjectProps.coefficient} ({totalPercentage !== 183 ? totalPercentage : "?"}%) </Text>
      </View>


      {/* ------------------- Window for changing a new subject ------------------- */}
      <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeSetting}
      >
        <TouchableWithoutFeedback onPress = {keyboardRemover}>
          <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style = {modalCSS.container}>
              <View style = {modalCSS.closer}>
                <TouchableOpacity onPress = {closeSetting}>
                  <FontAwesome name = "close" size = {50} color = "#E5E5E5" />
                </TouchableOpacity>
              </View>

              <View style = {modalCSS.addingInfo}>
                <Text style = {{ color: "#E5E5E5", fontSize: 30, fontWeight: "bold" }}> Change the subject </Text>
              </View>

              <View style = {modalCSS.inputs}>
                <View style = {modalCSS.singleInput}>
                  <Text style = {modalCSS.singleInputText}>Name: </Text>
                  <TextInput 
                    style = {modalCSS.textInputName}
                    onChangeText = {nameChangeHandler}
                    value = {currentName}
                  />
                </View>

                <View style = {modalCSS.singleInput}>
                  <Text style = {modalCSS.singleInputText}>CC1 coefficient: </Text>
                  <TextInput 
                    onChangeText = {CC1ChangeHandler}
                    keyboardType = "numeric"
                    style = {modalCSS.textInput}
                    value = {currentCC1}
                  />
                </View>

                <View style = {modalCSS.singleInput}>
                  <Text style = {modalCSS.singleInputText}>CC2 coefficient: </Text>
                  <TextInput 
                    onChangeText = {CC2ChangeHandler}
                    keyboardType = "numeric"
                    style = {modalCSS.textInput}
                    value = {currentCC2}
                  />
                </View>
                
                <View style = {modalCSS.singleInput}>
                  <Text style = {modalCSS.singleInputText}>CC3 coefficient: </Text>
                  <TextInput
                    onChangeText = {CC3ChangeHandler}
                    keyboardType = "numeric"
                    style = {modalCSS.textInput}
                    value = {currentCC3}
                  />
                </View>

                {/* Info text about unused coefficients */}
                {deletionConfirm === 0 ? (
                  <View>
                    <Text style = {modalCSS.unusedInfoText}> 
                      Info: If a coefficient will not be used, leave it blank. 
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style = {[modalCSS.unusedInfoText, {color: "#EE2B2B"}]}> 
                      Warning: If you are sure you want to delete the subject, press the "Delete" button again.
                    </Text>
                  </View>
                )}

                {/* Button that adds the new written props to the subject, then closes the modal */}
                <View style = {{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style = {subjectCSS.changeButton}>
                    <TouchableOpacity onPress = {changeSubject}>
                      <Text style = {subjectCSS.changeButtonText}> Change </Text>
                    </TouchableOpacity>
                  </View>

                  <View style = {subjectCSS.deleteButton}>
                    <TouchableOpacity onPress = {deletionConfirm === 0 ? () => setDeletionConfirm(1) : deleteSubject}>
                      <Text style = {subjectCSS.deleteButtonText}> Delete </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}