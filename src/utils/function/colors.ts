import { mode } from "../../../mode";

type sectionType =
  | "reverse"
  | "normal"
  | "background"
  | "error"
  | "main"
  | "gray";

interface paletteType {
  [key: string]: {
    light?: string;
    dark?: string;
    [key: number]: string;
  };
}
export const colors = (
  section: sectionType,
  index?: string | number,
  hold?: boolean,
) => {
  if (index && typeof index === "number") {
    return palette[section][
      hold
        ? index
        : mode === "light"
        ? index
        : (9 - Math.floor(index / 100)) * 100 || 50
    ];
  } else {
    return palette[section][mode];
  }
};

const palette: paletteType = {
  normal: {
    light: "#ffffff",
    dark: "#141414",
  },
  reverse: {
    light: "#141414",
    dark: "#ffffff",
  },
  background: {
    light: "#ffffff",
    dark: "#222222",
  },
  error: {
    light: "#FF3832",
    dark: "#FF756D",
  },
  main: {
    50: "#F2EAFE",
    100: "#E0CBFE",
    200: "#CBA8FD",
    300: "#B685FC",
    400: "#A66AFB",
    500: "#9650FA",
    600: "#8E49F9",
    700: "#8340F9",
    800: "#7937F8",
    900: "#6827F6",
  },
  gray: {
    50: "#F1F1F2",
    100: "#DDDCDD",
    200: "#C6C5C7",
    300: "#AFADB1",
    400: "#9D9CA0",
    500: "#8C8A8F",
    600: "#848287",
    700: "#79777C",
    800: "#6F6D72",
    900: "#5C5A60",
  },
};
