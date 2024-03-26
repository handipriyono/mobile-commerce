import React from "react";
import { Text } from "react-native";

export type TTextProps = {
  font?: string;
  value: string;
  size?: number;
  color?: string;
  fontWeight?: string;
  style?: any;
  numberOfLines?: number;
};

const CustomText = ({
  font,
  value,
  size,
  color,
  fontWeight,
  style,
  numberOfLines,
  ...rest
}: TTextProps) => {
  return (
    <>
      <Text
        numberOfLines={numberOfLines}
        style={[
          {
            color: color,
            fontSize: size,
            fontWeight: fontWeight,
          },
          style,
        ]}
        {...rest}
      >
        {value}
      </Text>
    </>
  );
};

CustomText.defaultProps = {
  font: "regular",
  size: 22,
  color: "#808080",
  fontWeight: "400",
};

export default CustomText;
