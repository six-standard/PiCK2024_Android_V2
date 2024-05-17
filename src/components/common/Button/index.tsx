import { Pressable } from "react-native";
import { PropType, size } from "./types";
import { colors } from "@utils";
import { Text } from "@commons";

const defaultSize: size = {
  width: "100%",
  height: "auto",
  padding: {
    vertical: 10,
    horizontal: 0,
  },
};

export const Button = ({
  children,
  selected = true,
  disabled = false,
  size = defaultSize,
  onPress,
  ...props
}: PropType) => {
  return (
    <Pressable
      style={{
        width: size?.width,
        height: size?.height,
        alignItems: "center",
        backgroundColor: disabled
          ? colors("main", 100)
          : selected
          ? colors("main", 500)
          : colors("gray", 100),
        borderRadius: 8,
        paddingVertical: size?.padding?.vertical,
        paddingHorizontal: size?.padding?.horizontal,
        alignSelf: "auto",
      }}
      disabled={disabled}
      onPress={onPress}
      {...props}>
      <Text type="button 1" color="white">
        {children}
      </Text>
    </Pressable>
  );
};
