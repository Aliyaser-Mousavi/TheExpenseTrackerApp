import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  userId: "",
  isAuthenticated: false,
  authenticate: (token, userId) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedUserId = await AsyncStorage.getItem("userId");
      if (storedToken && storedUserId) {
        setAuthToken(storedToken);
        setUserId(storedUserId);
      }
    }
    fetchToken();
  }, []);

  async function authenticate(token, userId) {
    setAuthToken(token);
    setUserId(userId);
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("userId", userId);
  }

  async function logout() {
    setAuthToken(null);
    setUserId(null);
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
  }

  const value = {
    token: authToken,
    userId: userId,
    authenticate: authenticate,
    logout: logout,
    isAuthenticated: !!authToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
