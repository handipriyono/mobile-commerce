import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import Text from "../../commons/components/Text/Text.component";
import { TProductItem } from "../../commons/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Styles from "./style";
import useProductQuery from "./hooks/useProductQuery";
import AddCartButton from "../../commons/components/AddCart";

type TItemList = {
  item: TProductItem;
  navigation: NativeStackNavigationProp<any>;
};

type THomepage = {
  navigation: NativeStackNavigationProp<any>;
};

const ItemList = ({ item, navigation }: TItemList) => {
  const goDetail = () => {
    navigation.navigate("Detail", {
      id: item.id,
    });
  };
  return (
    <View style={Styles.wrapper}>
      <TouchableOpacity style={{ flex: 1 }} onPress={goDetail}>
        <Image
          style={Styles.image}
          source={item?.image}
          placeholder={item?.title}
          contentFit="cover"
          transition={null}
        />
        <View style={Styles.titleWrapper}>
          <Text
            style={{ paddingBottom: 4 }}
            numberOfLines={2}
            color="#5f5f5f"
            value={item?.title}
            size={13}
          />
          <Text
            fontWeight="bold"
            size={15}
            color="#000"
            value={`$${item?.price}`}
          />
        </View>
      </TouchableOpacity>
      <AddCartButton
        item={item}
        iconSize={30}
        totalSize={15}
        styleAddToCart={{ height: 35 }}
      />
    </View>
  );
};

const HomePage = ({ navigation }: THomepage) => {
  const { dataProduct } = useProductQuery();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <FlashList
          data={dataProduct}
          numColumns={2}
          extraData={dataProduct}
          keyExtractor={(item: TProductItem, index) => String(item?.title)}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
          contentContainerStyle={{ padding: 0 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ItemList item={item} navigation={navigation} />
          )}
          estimatedItemSize={200}
          onEndReached={() => {
            // if (fetchNextPage) {
            //   fetchNextPage();
            // }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
