import { View, Text, Button, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function ModalScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, paddingTop: 50, marginTop: 50, paddingHorizontal: 10 }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>PT. Barat Daya</Text>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          paddingBottom: 15,
          paddingTop: 15,
          justifyContent: "space-between",
          borderBottomWidth: 2,
          borderBottomColor: "#eee",
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Phone Number</Text>
          <Text>09128273923</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyModal");
            }}
          >
            <AntDesign name="edit" size={20} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          paddingBottom: 15,
          paddingTop: 15,
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "#eee",
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Address</Text>
          <Text>Jl. Kalimantan No. 10 desa kaliwulung No. 2 Barat Daya</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyModal");
            }}
          >
            <AntDesign name="edit" size={20} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ModalScreen;
