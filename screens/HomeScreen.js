import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Modal, ScrollView, Dimensions } from "react-native"
import { useState, useEffect } from "react";
import { homeCSS } from "../styles/homestyle"
import { modalCSS } from "../styles/globalstyle";
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import Subject from "../components/Subject";
import AsyncStorage from '@react-native-async-storage/async-storage';

/* List of potential TODO:
  * Making available to contact us (you)
  * Displaying the name and the version of app on the top of the screen
*/

export default function HomeScreen() {
  const [isAddSubjectModalVisible, setIsAddSubjectModalVisible] = useState(false);
  const DEVELOPMENT_MODE = false;
  const [isEmpty, setIsEmpty] = useState(true);
  const [loading, setLoading] = useState(true);
  const TOTALS_HEIGHT = 140;
  const TOTAL_TWENTY = 20;

  const [newName, setNewName] = useState("");
  const [newCC1, setNewCC1] = useState(0);
  const [newCC2, setNewCC2] = useState(0);
  const [newCC3, setNewCC3] = useState(0);

  // Total values
  const [finalTotal, setFinalTotal] = useState(0);
  const [semesterTotal, setSemesterTotal] = useState(0);
  const [finalTotalTwenty, setFinalTotalTwenty] = useState(0);
  const [finalPercentage, setFinalPercentage] = useState(0);
  
  const [subjectsList, setSubjectsList] = useState([]);

  const updateSubjectsList = (newSubjectsList) => {
    setSubjectsList(newSubjectsList);
  };  

  // Fetchs data
  const fetchData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem("SL");
      if (jsonData) {
        const parsedData = JSON.parse(jsonData);
        setSubjectsList(parsedData);
        if (Array.isArray(parsedData) && parsedData.length === 0)
          setIsEmpty(true);
        else
          setIsEmpty(false);
        setTimeout(() => setLoading(false), 2000);
      } else {
        setIsEmpty(true);
        setTimeout(() => setLoading(false), 2000);
      }
    } catch (error) {
      console.log("Error is: ", error); // IMPORTANT: Add a message in case of error
    }
  }
  
  // Deletes the data from database (for development)
  const resetData = async () => {
    try {
      await AsyncStorage.removeItem("SL");
      console.log("Data was cleared successfully.");
    } catch (error) {
      console.log("Error in cleaning data. The error: " + error);
    }
  }

  // Saves data into the database
  useEffect(() => {
    if (loading === false)
    {
      AsyncStorage.setItem("SL", JSON.stringify(subjectsList))
      .then(() => console.log("Data saved successfully."))
      .catch((error) => console.log("Error saving data. ", error)); // IMPORTANT: Add a message in case of error
    }
  }, [subjectsList]);
  
  // Fetchs data into the database
  useEffect(() => {
    fetchData();
    if (DEVELOPMENT_MODE === true)
      resetData();
  }, []);

  // For the rest of application
  useEffect(() => {
    const newFinalTotal = subjectsList.reduce(( accumulator, currentObject ) => {
      return accumulator + currentObject.subjectTotal
    }, 0);
    
    const newSemesterTotal = subjectsList.reduce(( accumulator, currentObject ) => {
      return accumulator + currentObject.coefficient;
    }, 0);

    const newFinalTotalTwenty = newFinalTotal * TOTAL_TWENTY / newSemesterTotal;
    const newFinalPercentage = newFinalTotalTwenty * 100 / TOTAL_TWENTY;
    
    setFinalTotal(newFinalTotal % 1 === 0 ? parseFloat(newFinalTotal.toFixed(0)) : parseFloat(newFinalTotal.toFixed(3)));
    setSemesterTotal(newSemesterTotal % 1 === 0 ? parseFloat(newSemesterTotal.toFixed(0)) : parseFloat(newSemesterTotal.toFixed(3)));
    setFinalTotalTwenty(newFinalTotalTwenty % 1 === 0 ? parseFloat(newFinalTotalTwenty.toFixed(0)) : parseFloat(newFinalTotalTwenty.toFixed(3)));
    setFinalPercentage(newFinalPercentage % 1 === 0 ? parseFloat(newFinalPercentage.toFixed(0)) : parseFloat(newFinalPercentage.toFixed(2)));
  }, [subjectsList])

  const keyboardRemover = () => {
    Keyboard.dismiss();
  }

  const openAddSubject = () => setIsAddSubjectModalVisible(true);
  const closeAddSubject = () => setIsAddSubjectModalVisible(false);
  
  const addSubject = () => {
    const newSubject = {
      name: newName,
      get coefficient() {
        let sum = 0;

        if (this.CC1Coef !== 0) {
          sum += this.CC1Coef;
        }

        if (this.CC2Coef !== 0) {
          sum += this.CC2Coef;
        }

        if (this.CC3Coef !== 0) {
          sum += this.CC3Coef;
        }

        return sum;
      },
      CC1Coef: newCC1 === "" ? 0 : parseFloat(newCC1),
      CC2Coef: newCC2 === "" ? 0 : parseFloat(newCC2),
      CC3Coef: newCC3 === "" ? 0 : parseFloat(newCC3),
      CC1Score: 183,
      CC2Score: 183,
      CC3Score: 183,
      subjectTotal: 0
    }

    const newSubjectsList = [...subjectsList, newSubject];
    updateSubjectsList(newSubjectsList);
    setIsEmpty(false);

    // Resets the values for adding a subject
    setNewName("");
    setNewCC1(0);
    setNewCC2(0);
    setNewCC3(0);    

    closeAddSubject();
  }

  const screenHeight = Dimensions.get('window').height;
  const scrollViewHeight = screenHeight - TOTALS_HEIGHT;

  return (
    <View style = {homeCSS.container}>
      <StatusBar 
        backgroundColor = '#171717'
        barStyle = 'light-content'
      />
      
      <View style = {loading === true ? homeCSS.loadingContainer : {display: "none"}}>
        <Text style = {homeCSS.appName}> Scorelator </Text>
        <Text style = {homeCSS.whoMade}> Made by Shamkhal Guliyev </Text>
        <Text style = {homeCSS.version}> v1.0.0 </Text>
      </View>

      {isEmpty === true ? (
        <View style = {loading === true ? {display: "none"} : homeCSS.emptyArrayView}>
          <Text style = {homeCSS.emptyArrayText}> Currently, there are no subjets to display. </Text>
          <Text style = {[homeCSS.emptyArrayText, {marginTop: 30}]}> Press + button to add a subject. </Text>
        </View>
      ) : (
        // TODO: When removing all existing subjects, the screen must set "isEmpty" to "true"
        <View style = {loading === true ? {display: "none"} : {display: "flex"}}>
          <ScrollView style = {{maxHeight: scrollViewHeight}}>
            {subjectsList.map((subjectProps, index) => (
              <Subject 
                key = {index}
                subjectKey = {index}
                subjectProps = {subjectProps}
                subjectsList = {subjectsList}
                updateSubjectsList = {updateSubjectsList}
              />
            ))}
          </ScrollView>

          {/* Total points and percentage */}
          <View style = {homeCSS.totals}>
            <Text style = {homeCSS.totalsText}> Total: {finalTotal} / {semesterTotal} </Text>
            <Text style = {homeCSS.totalsText}> Total (out of 20): {finalTotalTwenty} / {TOTAL_TWENTY} </Text>
            <Text style = {homeCSS.totalsText}> Total percentage: {finalPercentage} % </Text>
          </View>
        </View>  
      )}

      {/* + button to add a new subject to the list */}
      <TouchableOpacity style = {loading === true ? {display: "none"} : isEmpty === true ? homeCSS.emptyTouchable : homeCSS.touchable} onPress = {openAddSubject}>
        <View style = {isEmpty === true ? homeCSS.emptyAdd : homeCSS.add}>
          <Text style = {isEmpty === true ? homeCSS.emptyText : homeCSS.text}>+</Text>
        </View>
      </TouchableOpacity>
    
      {/* -------------------- Modal window for adding a new subject --------------------- */}
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
                    Info: If a coefficient will not be used, leave it blank, or write 0. 
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
  )
}