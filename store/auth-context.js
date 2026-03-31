import { createContext, useState } from "react";
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
  async function authenticate(token, userId) {
    setAuthToken(token);
    setUserId(userId);
    try {
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userId", userId);
    } catch (error) {}
  }
}
