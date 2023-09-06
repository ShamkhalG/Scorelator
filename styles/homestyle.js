import { StyleSheet } from 'react-native';

export const homeCSS = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#171717",
    flex: 1,
    paddingTop: 50
  },

  touchable: {
    borderRadius: 50,
    height: 80, 
    position: "absolute", 
    right: 20, 
    top: 740,
    width: 80
  },

  add: {
    alignItems: "center",
    backgroundColor: "#1F5435",
    borderRadius: 50,
    height: 80,
    padding: 10,
    position: "absolute",
    width: 80
  },

  text: {
    color: "#E5E5E5",
    fontSize: 40,
  },

  // REMOVE: Remove this. It's only for an example
  homeText: {
    color: "#E5E5E5",
    fontSize: 30,
    paddingBottom: 50
  },

  modalContainer: {
    backgroundColor: "#171717", 
    height: '100%',
    padding: 20,
    width: '100%'
  },

  modalCloser: {
    alignItems: "flex-end",
  },

  modalInputs: {
    flex: 1,
    justifyContent: "center",
  },

  modalSingleInput: {
    flexDirection: "row",
    marginBottom: 50
  },
  
  modalSingleInputText: {
    color: "#E5E5E5",
    fontSize: 30,
    fontWeight: "bold",
  },

  modalTextInput: {
    backgroundColor: "green",
    color: "#E5E5E5",
    width: "10%"
  }
})