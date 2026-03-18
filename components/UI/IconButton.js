import { StyleSheet, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.9 }],
  },
});
