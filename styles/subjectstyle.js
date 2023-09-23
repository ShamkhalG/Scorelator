import { StyleSheet } from 'react-native';

export const subjectCSS = StyleSheet.create({
  container: {
    backgroundColor: "#171717",
    borderColor: "#DEDEDE",
    borderWidth: 2,
    marginBottom: 30,
    width: 350
  },

  // Top part
  top: {
    borderBottomWidth: 2,
    borderColor: "#DEDEDE",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 3,
    paddingTop: 3
  },

  topRight: {
    flexDirection: "row",
  },

  setting: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5
  },

  topText: {
    color: "#DEDEDE",
    fontSize: 25,
    fontWeight: "bold"
  },

  // Middle part
  middle: {
    borderBottomWidth: 2,
    borderColor: "#DEDEDE",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
    paddingLeft: 8,
    paddingRight: 8
  },

  middleView: {
    flex: 1,
    margin: 4
  },

  middleText: {
    color: "#DEDEDE",
    fontSize: 20,
    textAlign: "center"
  },

  middleInput: {
    borderColor: "#A9A9A9",
    borderWidth: 2,
    color: "#FFAC4E",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center"
  },

  xletter: {
    color: "#DEDEDE",
    fontSize: 70,
    textAlign: "center"
  },

  // Bottom part
  bottom: {
    paddingTop: 8,
    paddingBottom: 8
  },

  bottomText: {
    color: "#DEDEDE",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },

  // Change modal CSS
  changeButton: {
    alignItems: "center",
    borderColor: "#DEDEDE",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 50,
    padding: 10,
    width: "45%"
  },

  changeButtonText: {
    color: "#DEDEDE",
    fontSize: 30,
    fontWeight: "bold"
  },

  deleteButton: {
    alignItems: "center",
    borderColor: "#EE2B2B",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 50,
    padding: 10,
    width: "45%"
  },

  deleteButtonText: {
    color: "#EE2B2B",
    fontSize: 30,
    fontWeight: "bold"
  },
})