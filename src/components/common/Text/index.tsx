import { Text as NativeText } from "react-native";
import { types } from "./constants";
import { PropType } from "./types";
import { colors } from "@/utils";

export const Text = ({
  type,
  color = colors("gray", 50),
  children,
  ...props
}: PropType) => {
  const [name, size] = type.split(" ");
  const fontStyle = types[name][parseInt(size)];

  return (
    <NativeText style={{ ...fontStyle, color: color }} {...props}>
      {children}
    </NativeText>
  );
};
