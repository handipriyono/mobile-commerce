import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  total: {
    fontWeight: "bold",
    color: "#808080",
    minWidth: 5,
  },
  button: {
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "#eee",
    height: 40,
    marginBottom: 10,
  },
});
