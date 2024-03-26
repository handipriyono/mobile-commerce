import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginContextWrap } from "../context/login";
import { useContext, useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import Login from "../screens/login/index";
import HomePage from "../screens/homepage/index";
import Profile from "../screens/profile/index";
import ShoppingList from "../screens/shopping-list/index";
import DetailPage from "../screens/detail/index";
import ModalScreen from "../screens/profile/Modal";
import SuccessPage from "../screens/success";
import Text from "../commons/components/Text/Text.component";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  const { cart } = useContext(LoginContextWrap);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <View style={{ marginHorizontal: 20 }}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
          headerLeft: () => {
            return (
              <View
                style={{
                  paddingLeft: 20,
                  padding: 10,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="chrome" size={25} color="#00a656" />
                <Text style={{ paddingHorizontal: 6 }} value="Commerce" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ShoppingList"
        component={ShoppingList}
        options={{
          tabBarShowLabel: false,
          headerTitle: "",
          headerLeft: () => {
            return (
              <View
                style={{
                  paddingLeft: 20,
                  padding: 10,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="chrome" size={25} color="#00a656" />
                <Text style={{ paddingHorizontal: 6 }} value="Commerce" />
              </View>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
          tabBarBadge:
            Object?.values(cart)?.length > 0
              ? Object.values(cart)?.length
              : undefined,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const NavigationList = () => {
  const { cart } = useContext(LoginContextWrap);
  const { isLoggedIn } = useContext(LoginContextWrap);

  const total = useMemo(() => {
    return Object?.values(cart)?.length;
  }, [cart]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Group>
              <Stack.Screen
                name="Dashboard"
                options={{ headerShown: false }}
                component={MyTabs}
              />
              <Stack.Screen
                name="Detail"
                options={({ navigation, route }) => ({
                  headerTitleAlign: "center",
                  headerTitle: "",
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <AntDesign name="arrowleft" size={24} color="#4B4B4B" />
                    </TouchableOpacity>
                  ),
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ShoppingList")}
                      style={{
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MaterialIcons
                        name="shopping-cart"
                        size={24}
                        color="#4B4B4B"
                      />
                      {total > 0 ? (
                        <View
                          style={{
                            borderRadius: 20,
                            backgroundColor: "red",
                            padding: 2,
                            width: 25,
                            height: 20,
                            justifyContent: "center",
                            alignContent: "center",
                          }}
                        >
                          <Text
                            size={10}
                            value={String(total)}
                            color="#fff"
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          />
                        </View>
                      ) : null}
                    </TouchableOpacity>
                  ),
                })}
                component={DetailPage}
              />
              <Stack.Screen
                name="SucessPage"
                options={({ navigation, route }) => ({
                  headerTitleAlign: "center",
                  headerTitle: "",
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}
                    >
                      <AntDesign name="closecircleo" size={20} color="red" />
                    </TouchableOpacity>
                  ),
                  headerLeft: () => {
                    return (
                      <View
                        style={{
                          paddingLeft: 20,
                          padding: 10,
                          justifyContent: "center",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <AntDesign name="chrome" size={25} color="#00a656" />
                        <Text
                          style={{ paddingHorizontal: 6 }}
                          value="Commerce"
                        />
                      </View>
                    );
                  },
                })}
                component={SuccessPage}
              />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }}>
              <Stack.Screen
                name="MyModal"
                options={{ headerShown: false }}
                component={ModalScreen}
              />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
