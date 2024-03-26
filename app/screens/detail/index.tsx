import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { TObj } from "../../commons/types";
import useProductDetailQuery from "./hooks/useDetailProductQuery";
import { Image } from "expo-image";
import Text from "../../commons/components/Text/Text.component";
import Button from "../../commons/components/Button/Button.component";
import { AntDesign } from "@expo/vector-icons";
import AddCartButton from "../../commons/components/AddCart/index";
import Styles from "./style";

type TDetail = {
  route: TObj;
};

const DetailPage = ({ route }: TDetail) => {
  const { detailProduct } = useProductDetailQuery({ id: route?.params?.id });

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
          <View style={Styles.imageWrap}>
            <Image
              style={{ height: 236, width: "100%" }}
              source={detailProduct?.image || null}
              placeholder={"img"}
              contentFit="contain"
              transition={200}
            />
          </View>
        </View>
        <View style={{ flex: 1, marginHorizontal: 10, paddingBottom: 100 }}>
          <Text
            color="#000"
            style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 15 }}
            value={detailProduct?.title}
          />

          <TouchableOpacity>
            <View style={Styles.categoryWrapper}>
              <Text
                color="#808080"
                style={Styles.category}
                value={detailProduct?.category}
              />
              <AntDesign name="tagso" size={24} color="orange" />
            </View>
          </TouchableOpacity>

          <Text
            style={{ fontSize: 14, fontWeight: 400 }}
            value={detailProduct?.description}
          />
        </View>
      </ScrollView>
      <View style={Styles.priceWrap}>
        <View style={{ width: "49%" }}>
          <Button
            title={detailProduct?.price ? `$${detailProduct?.price}` : ""}
            disabled
          />
        </View>
        <AddCartButton item={detailProduct} />
      </View>
    </SafeAreaView>
  );
};

export default DetailPage;
