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

  totals: {
    alignItems: "center",
    height: 140,
    justifyContent: "center",
    left: 20,
    paddingTop: 10,
    position: "absolute",
    top: 698,
    width: 250,
  },

  totalsText: {
    color: "#E5E5E5",
    fontSize: 18,
    fontWeight: "bold"
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
})