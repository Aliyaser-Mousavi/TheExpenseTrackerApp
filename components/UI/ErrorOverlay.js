import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
import Button from "./Button";
import { Ionicons } from "@expo/vector-icons";

const colors = GlobalStyles.colors;

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="alert-circle-outline"
          size={80}
          color={colors.error500}
        />
      </View>

      <Text style={styles.title}>Oops! Something went wrong</Text>

      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>

      <Button style={styles.button} onPress={onConfirm}>
        Try Again
      </Button>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: colors.primary800,
  },
  iconContainer: {
    marginBottom: 20,
    shadowColor: colors.error500,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
    textAlign: "center",
  },
  messageBox: {
    backgroundColor: colors.primary700,
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    width: "100%",
    borderLeftWidth: 4,
    borderLeftColor: colors.error500,
  },
  messageText: {
    color: colors.primary100,
    fontSize: 15,
    textAlign: "left",
    lineHeight: 22,
  },
  button: {
    minWidth: 150,
  },
});
