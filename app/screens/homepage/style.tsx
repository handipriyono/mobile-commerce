import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 5,
    marginTop: 10,
    padding: 5,
    paddingTop: 0,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#A8A8A8",
    borderWidth: 1,
    borderRadius: 12,
    height: 280,
  },
  image: {
    height: 140,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: 5,
    paddingBottom: 8,
  },
});
