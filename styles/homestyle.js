import { StyleSheet } from 'react-native';

export const homeCSS = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#171717",
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20
  },

  // Loading page CSS
  loadingContainer: {
    backgroundColor: "#171717",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  appName: {
    fontSize: 70,
    color: "#DEDEDE",
  },

  whoMade: {
    fontSize: 20,
    color: "#DEDEDE",
    position: "absolute",
    top: 730
  },

  version: {
    fontSize: 20,
    color: "#DEDEDE",
    position: "absolute",
    top: 760
  },

  // Rest
  totals: {
    alignItems: "center",
    height: 140,
    justifyContent: "center",
    left: 5,
    paddingTop: 10,
    position: "absolute",
    top: 658,
    width: 250,
  },
  
  totalsText: {
    color: "#DEDEDE",
    fontSize: 18,
    fontWeight: "bold"
  },

  touchable: {
    borderRadius: 50,
    height: 80, 
    position: "absolute", 
    right: 0, 
    top: 695,
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
    color: "#DEDEDE",
    fontSize: 40,
  },
})