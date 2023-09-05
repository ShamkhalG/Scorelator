import { StyleSheet } from 'react-native';

export const homeCSS = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#171717",
    flex: 1,
    paddingTop: 50
  },

  addSubject: {
    position: "absolute",
    top: 370,
    left: 90,
    backgroundColor: "#1F5435",
    borderRadius: 50,
    padding: 10,
    width: 80,
    height: 80,
    alignItems: "center"
  },

  text: {
    color: "#E5E5E5",
    fontSize: 40,
  },

  // REMOVE: Remove this. It was only for an example
  homeText: {
    color: "#E5E5E5",
    fontSize: 30,
    paddingBottom: 50
  }
})