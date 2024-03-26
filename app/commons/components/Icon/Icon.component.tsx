import React, { useMemo } from "react";
import { View } from "react-native";

export type TProvider =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Fontisto"
  | "Foundation"
  | "Ionicons"
  | "MaterialIcons"
  | "MaterialCommunityIcons"
  | "Octicons"
  | "Zocial"
  | "SimpleLineIcons";

export type TIconProp = {
  provider: TProvider;
  name: string;
  size?: number;
  color?: string;
};

const CustomIcon = ({ provider, name, size, color }: TIconProp) => {
  // const IconComponent = useMemo(() => getIconProvider(provider), [provider]);
  return <View></View>;
};

CustomIcon.defaultProps = {
  size: 24,
  color: "#eee",
};

export default CustomIcon;
