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
    padding: 3,
    paddingLeft: 20,
    paddingRight: 20
  },

  middleText: {
    color: "#E5E5E5",
    fontSize: 20,
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

  text: {
    color: "#E5E5E5",
  }
})