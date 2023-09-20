import { StyleSheet } from 'react-native';

export const subjectCSS = StyleSheet.create({
  container: {
    backgroundColor: "#171717",
    borderColor: "#E5E5E5",
    borderWidth: 2,
    width: 350,

  },

  top: {
    borderBottomWidth: 2,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 3,
    paddingBottom: 3
  },

  topRight: {
    flexDirection: "row"
  },

  setting: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },

  topText: {
    color: "#E5E5E5",
    fontSize: 25,
    fontWeight: "bold"
  },

  middle: {
    borderBottomWidth: 2,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch", // REMOVE:
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10
  },

  middleView: {
    flex: 1,
    margin: 4,
  },

  middleText: {
    color: "#E5E5E5",
    fontSize: 20,
    textAlign: "center"
  },

  middleInput: {
    borderColor: "#A9A9A9",
    borderWidth: 2,
    color: "#FFAC4E",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },

  xletter: {
    color: "#E5E5E5",
    fontSize: 70,
    textAlign: "center"
  },

  bottom: {
    paddingTop: 8,
    paddingBottom: 8
  },

  bottomText: {
    color: "#E5E5E5",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },

  // Change modal CSS
  changeButton: {
    alignItems: "center",
    borderColor: "#E5E5E5",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 50,
    padding: 10,
    width: "45%"
  },

  changeButtonText: {
    color: "#E5E5E5",
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