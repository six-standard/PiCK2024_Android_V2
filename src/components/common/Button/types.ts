import { DimensionValue, PressableProps } from "react-native";

export type size = {
  width?: DimensionValue;
  height?: DimensionValue;
  padding?: {
    vertical?: number;
    horizontal?: number;
  };
};

export interface PropType extends PressableProps {
  children: string;
  selected?: boolean;
  disabled?: boolean;
  size?: size;
  onPress: () => void;
}
