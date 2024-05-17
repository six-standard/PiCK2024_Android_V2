import { TextInputProps, TextInput as NativeInput, View } from "react-native";
import { colors } from "@/utils";
import { Text } from "@commons";

interface PropType
  extends Omit<TextInputProps, "onChange" | "multiline" | "numberOfLines"> {
  value: string | undefined;
  onChange: (text: string, id?: string) => void;
  placeholder: string;
  label?: string;
  id?: string;
  multiline?: number;
}

export const TextInput = ({
  value,
  onChange,
  placeholder,
  label,
  id,
  multiline,
  ...props
}: PropType) => {
  return (
    <View style={{ gap: 10 }}>
      {label && (
        <Text type="label 1" color={colors("reverse")}>
          {label}
        </Text>
      )}
      <NativeInput
        value={value}
        onChangeText={text => (!!id ? onChange(text, id) : onChange(text))}
        style={{
          backgroundColor: colors("gray", 50),
          width: "100%",
          height: !!multiline ? multiline * 24 : "auto",
          paddingHorizontal: 15,
          paddingVertical: !!multiline ? 14 : 8,
          borderRadius: 8,
          fontSize: 12,
          color: colors("reverse"),
          textAlignVertical: !!multiline ? "top" : "auto",
        }}
        numberOfLines={multiline || 1}
        multiline={!!multiline}
        placeholderTextColor={colors("gray", 500)}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};
