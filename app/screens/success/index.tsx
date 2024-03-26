import { View, SafeAreaView } from "react-native";
import Text from "../../commons/components/Text/Text.component";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../commons/components/Button/Button.component";
import { useEffect } from "react";
import useCart from "../../commons/stores/cart";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TSuccessPage = {
  navigation: NativeStackNavigationProp<any>;
};

const SuccessPage = ({ navigation }: TSuccessPage) => {
  const onRemove = useCart((state) => state.onRemove);

  useEffect(() => {
    onRemove();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <AntDesign name="checkcircle" size={50} color="green" />
        <Text
          size={18}
          value="Terima kasih sudah melakukan pemesanan"
          style={{ marginTop: 20 }}
        />
        <Text size={18} value="Pesanan anda sedang diproses..." />
        <Button
          style={{ marginTop: 20, padding: 5 }}
          title="Kembali ke Home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SuccessPage;
