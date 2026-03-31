import axios from "axios";
const API_KEY = "AIzaSyCIkSlwT1dLtMR1uAF2r1rlzy-hgr1JxLw";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    return {
      token: response.data.idToken,
      userId: response.data.localId,
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.error?.message || "AUTHENTICATION_FAILED";
    throw new Error(errorMessage);
  }
}
export function createUser(email, password) {
  return authenticate("signUp", email, password);
}
export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
