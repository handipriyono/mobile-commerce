import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { LoginContextWrap } from "../../context/login";
import Styles from "./style";
import { StatusBar } from "expo-status-bar";

type TProfile = {
  navigation: NativeStackNavigationProp<any>;
};

const ProfilePage = ({ navigation }: TProfile) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContextWrap);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={Styles.wrapper}>
        <View style={{ paddingVertical: 10 }}>
          <AntDesign name="chrome" size={60} color="#00a656" />
          <Text style={Styles.name}>Handi Priyono</Text>
        </View>
      </View>

      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyModal");
          }}
        >
          <View style={Styles.row}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome6 name="user-circle" size={18} color="black" />
              <Text>Company Name</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="black"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyModal");
          }}
        >
          <View style={Styles.row}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Entypo name="location-pin" size={20} color="black" />
              <Text>Address</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="black"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyModal");
          }}
        >
          <View style={Styles.row}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome6 name="headphones-simple" size={20} color="black" />
              <Text>Phone Number</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="black"
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={Styles.bordered}></View>
        <View style={Styles.row}>
          <TouchableOpacity onPress={() => setIsLoggedIn(false)}>
            <View style={Styles.signout}>
              <AntDesign name="logout" size={20} color="red" />
              <Text>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ProfilePage;
