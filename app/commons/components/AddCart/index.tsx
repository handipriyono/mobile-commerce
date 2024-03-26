import { TouchableOpacity, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Text from "../Text/Text.component";
import Button from "../Button/Button.component";
import useCart from "../../stores/cart";
import { TObj, TProductItem } from "../../types";
import Styles from "./style";

type TAddCart = {
  item: TProductItem;
  styleAddToCart?: TObj;
  iconSize?: number;
  totalSize?: number;
};

export const AddCartButton = ({
  totalSize,
  item,
  styleAddToCart,
  iconSize,
}: TAddCart) => {
  const onIncrease = useCart((state) => state.onIncrease);
  const onDecrease = useCart((state) => state.onDecrease);
  const onAdd = useCart((state) => state.onAdd);
  const cart = useCart((state) => state.cart);

  const singleItem = cart?.[item?.id];

  const onAddCart = (payload: TProductItem) => {
    onAdd({
      item: payload,
    });
  };

  return (
    <View style={Styles.wrapper}>
      {singleItem ? (
        <>
          <TouchableOpacity
            style={{ paddingRight: 10, marginBottom: 10 }}
            onPress={() => onDecrease({ id: singleItem?.id })}
          >
            <EvilIcons name="minus" size={iconSize ?? 50} color="black" />
          </TouchableOpacity>
          <Text
            value={singleItem?.total}
            size={totalSize ?? 18}
            style={[Styles.total, { paddingBottom: 10 }]}
          />
          <TouchableOpacity
            style={{ paddingLeft: 10, marginBottom: 10 }}
            onPress={() => onIncrease({ id: singleItem?.id })}
          >
            <EvilIcons name="plus" size={iconSize ?? 50} color="black" />
          </TouchableOpacity>
        </>
      ) : (
        <Button
          disabled={!item?.id}
          title="Add to Cart"
          onPress={() => onAddCart(item)}
          style={[Styles.button, styleAddToCart]}
        />
      )}
    </View>
  );
};

export default AddCartButton;
