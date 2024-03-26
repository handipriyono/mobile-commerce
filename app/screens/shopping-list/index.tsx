import { View, SafeAreaView, ScrollView } from "react-native";
import Text from "../../commons/components/Text/Text.component";
import { Image } from "expo-image";
import AddCartButton from "../../commons/components/AddCart";
import { useContext } from "react";
import { LoginContextWrap } from "../../context/login";
import Button from "../../commons/components/Button/Button.component";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TProductItem } from "../../commons/types";
import Styles from "./style";

type TShoppinglist = {
  navigation: NativeStackNavigationProp<any>;
};

const ShoppingList = ({ navigation }: TShoppinglist) => {
  const { cart } = useContext(LoginContextWrap);

  const totalPrice = () => {
    return Object?.values(cart).reduce(
      (sum: number, item: TProductItem | any) =>
        sum + item?.total * item?.price,
      0
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1, marginTop: 5, paddingHorizontal: 20 }}>
        <>
          {Object?.values(cart).map?.((data) => (
            <View key={data?.id + data?.title}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ padding: 5 }}>
                  <Image
                    style={Styles.image}
                    source={data?.image}
                    placeholder={"item?.title"}
                    contentFit="cover"
                    transition={null}
                  />
                </View>
                <View style={{ flex: 1, padding: 10 }}>
                  <Text size={14} value={data?.title} />
                </View>
              </View>
              <View style={Styles.wrapperAction}>
                <View style={{ paddingLeft: 50, paddingTop: 4 }}>
                  <Text
                    size={16}
                    value={`$${data?.price}`}
                    color="#000"
                    style={{ fontWeight: "bold" }}
                  />
                </View>
                <AddCartButton
                  item={data}
                  iconSize={30}
                  styleAddToCart={{ height: 35 }}
                />
              </View>
            </View>
          ))}
          <View style={Styles.total}>
            <Text value="Total" size={17} color="#000" />
            <Text
              color="#000"
              value={"$" + String(totalPrice()?.toFixed(2))}
              style={{ fontSize: 18, fontWeight: "bold" }}
            />
          </View>
        </>
      </ScrollView>
      <Button
        title="Checkout"
        onPress={() => {
          navigation.navigate("SucessPage");
        }}
        style={{ marginTop: 20 }}
        disabled={!Object?.values(cart)?.length}
      />
    </SafeAreaView>
  );
};

export default ShoppingList;
