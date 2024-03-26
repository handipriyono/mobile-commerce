import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: "#fff" },
  imageWrap: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  category: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "500",
  },
  categoryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 5,
    justifyContent: "flex-end",
    borderBottomColor: "#eee",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  priceWrap: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 20,
    width: "100%",
    gap: 10,
    flexDirection: "row",
  },
});
