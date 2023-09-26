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

  // Empty array text CSS
  emptyArrayView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  emptyArrayText: {
    color: "#E5E5E5",
    fontSize: 30,
    textAlign: "center",
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

  // + button (when the array is not empty)
  touchable: {
    borderRadius: 50,
    height: 80, 
    position: "absolute", 
    right: 10, 
    top: 733,
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

  // + button CSS (when the array is empty)
  emptyTouchable: {
    borderRadius: 50,
    height: 100, 
    position: "absolute", 
    top: 600,
    width: 100
  },

  emptyAdd: {
    alignItems: "center",
    backgroundColor: "#1F5435",
    borderRadius: 50,
    height: 100,
    padding: 6,
    position: "absolute",
    width: 100
  },

  emptyText: {
    color: "#DEDEDE",
    fontSize: 60, // FIXME: Modify this
  }
})