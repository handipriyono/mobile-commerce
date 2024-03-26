import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 30,
  },
  txtInput: {
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 50,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 50,
    backgroundColor: "#00a656",
    borderWidth: 1,
    borderColor: "#eee",
  },
});
