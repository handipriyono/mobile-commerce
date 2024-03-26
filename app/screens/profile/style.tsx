import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  name: {
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  row: {
    paddingHorizontal: 10,
    flexDirection: "row",
    paddingBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bordered: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  signout: { flexDirection: "row", gap: 10, paddingTop: 20 },
});
