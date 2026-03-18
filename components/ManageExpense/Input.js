import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

const colors = GlobalStyles.colors;

const Input = ({ label, style, invalid, textInputConfig }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 13,
    color: colors.primary200,
    marginBottom: 6,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: colors.primary700,
    color: "white",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.primary400,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: colors.error500,
  },
  invalidInput: {
    backgroundColor: colors.error50,
    borderColor: colors.error500,
    color: colors.error500,
  },
});
