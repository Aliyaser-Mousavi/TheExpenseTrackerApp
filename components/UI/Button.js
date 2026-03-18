import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

const colors = GlobalStyles.colors;

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.accent500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  flat: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
  },
  buttonText: {
    color: colors.primary800,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  flatText: {
    color: colors.primary200,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
});
