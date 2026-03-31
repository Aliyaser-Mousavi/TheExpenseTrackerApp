import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { GlobalStyles } from "../../constants/style";
import { Ionicons } from "@expo/vector-icons";

const colors = GlobalStyles.colors;

const CustomSplashScreen = ({ onFinish }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Ionicons name="wallet" size={80} color={colors.accent500} />
        <Text style={styles.title}>EXPENSIO</Text>
        <View style={styles.underline} />
      </Animated.View>
    </View>
  );
};

export default CustomSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary800,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 4,
    marginTop: 10,
  },
  underline: {
    width: 40,
    height: 4,
    backgroundColor: colors.accent500,
    marginTop: 8,
    borderRadius: 2,
  },
});
