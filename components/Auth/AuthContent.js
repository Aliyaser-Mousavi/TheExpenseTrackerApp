import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

import FlatButton from "../UI/FlatButton";
import { GlobalStyles } from "../../constants/style";
import AuthForm from "./AuthForm";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, password } = credentials;
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={{}}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary800,
    elevation: 8,
  },
  buttons: {
    marginTop: 8,
  },
});
