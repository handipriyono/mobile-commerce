/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../Text/Text.component";
import Styles from "./Button.style";

type TButtonProps = {
  title: string;
  type?: "primary" | "secondary";
  onPress?: () => void;
  disabled?: boolean;
  style?: any;
  iconStyle?: any;
  icon?: string;
  leftIcon?: boolean;
  font?: string;
  textSize?: number;
  textColor?: string;
};

const Button = ({
  type,
  title,
  onPress,
  disabled,
  style,
  iconStyle,
  icon,
  leftIcon,
  font,
  textSize,
  textColor,
}: TButtonProps) => {
  const isSecondary = type === "secondary";

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          Styles.default,
          disabled ? { opacity: 0.5 } : {},
          isSecondary ? Styles.highlight : {},
          icon ? Styles.spacingIcon : {},
          leftIcon ? Styles.leftIcon : {},
          style,
        ]}
      >
        <Text
          size={textSize}
          font={font}
          value={title}
          color={textColor}
          fontWeight={"bold"}
        />
        {/* {icon ? (
          <View style={iconStyle}>
            <Icon
              name={icon as string}
              size={iconStyle?.size || 30}
              color={isSecondary ? "#808080" : "#fff "}
            />
          </View>
        ) : null} */}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: "primary",
  disabled: false,
  style: {},
  iconStyle: Styles.iconDefault,
  onPress: () => {},
  icon: "",
  leftIcon: false,
  textSize: 14,
  textColor: "#000",
};

export default Button;
