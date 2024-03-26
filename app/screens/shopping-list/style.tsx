import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    height: 50,
    padding: 10,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  wrapperAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 15,
  },
  total: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
