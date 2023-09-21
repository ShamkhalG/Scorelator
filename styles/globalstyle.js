import { StyleSheet } from 'react-native';

export const modalCSS = StyleSheet.create({
  container: {
    backgroundColor: "#171717", 
    height: '100%',
    padding: 20,
    width: '100%'
  },

  closer: {
    alignItems: "flex-end",
  },

  addingInfo: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40
  },

  addingInfoText: {
    color: "#E5E5E5",
    fontSize: 38,
    fontWeight: "bold"
  },

  inputs: {
    justifyContent: "center",
  },

  singleInput: {
    flexDirection: "row",
    marginBottom: 50
  },

  singleInputText: {
    color: "#E5E5E5",
    fontSize: 30,
    fontWeight: "bold",
  },

  textInput: {
    backgroundColor: "#171717", // FIXME: Change this color
    borderColor: "#A9A9A9",
    borderWidth: 2,
    color: "#E5E5E5",
    fontSize: 25,
    marginLeft: 25,
    textAlign: "center",
    width: "20%"
  },

  textInputName: {
    backgroundColor: "#171717", // FIXME: Change this color
    borderColor: "#A9A9A9",
    borderWidth: 2,
    color: "#E5E5E5",
    fontSize: 25,
    paddingLeft: 7,
    paddingRight: 7,
    width: "65%"
  },

  unusedInfoText: {
    color: "#00E7EB",
    fontSize: 20,
    fontWeight: "bold"
  },

  addButton: {
    alignItems: "center",
    borderColor: "#E5E5E5",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 50,
    padding: 10,
    width: "50%"
  },

  addButtonText: {
    color: "#E5E5E5",
    fontSize: 35,
    fontWeight: "bold"
  }
})