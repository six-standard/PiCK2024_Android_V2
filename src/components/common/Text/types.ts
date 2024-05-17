import { TextProps } from "react-native";

type fontType =
  | "heading 1"
  | "heading 2"
  | "heading 3"
  | "heading 4"
  | "subTitle 1"
  | "subTitle 2"
  | "subTitle 3"
  | "body 1"
  | "body 2"
  | "body 3"
  | "caption 1"
  | "caption 2"
  | "label 1"
  | "label 2"
  | "button 1"
  | "button 2";

export interface typesType {
  [key: string]: {
    [key: number | string]: {
      fontSize: number;
      fontFamily: string;
    };
  };
}

export interface PropType extends TextProps {
  type: fontType;
  color?: string;
  children: string;
}
