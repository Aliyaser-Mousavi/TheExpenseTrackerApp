import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

const BACKEND_URL =
  "https://theexpensetrackerapp-f1677-default-rtdb.firebaseio.com";

async function checkInternet() {
  const net = await NetInfo.fetch();
  if (!net.isConnected) {
    throw new Error("NO_INTERNET");
  }
}

export async function storeExpense(expenseData, token, userId) {
  await checkInternet();
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/${userId}/expenses.json?auth=${token}`,
      expenseData,
    );
    return response.data.name;
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}

export async function fetchExpense(token, userId) {
  await checkInternet();
  try {
    const response = await axios.get(
      `${BACKEND_URL}/users/${userId}/expenses.json?auth=${token}`,
    );

    const expenses = [];
    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };
      expenses.push(expenseObj);
    }
    return expenses;
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}

export async function updateExpense(id, expenseData, token, userId) {
  await checkInternet();
  try {
    return await axios.put(
      `${BACKEND_URL}/users/${userId}/expenses/${id}.json?auth=${token}`,
      expenseData,
    );
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}

export async function deleteExpense(id, token, userId) {
  await checkInternet();
  try {
    return await axios.delete(
      `${BACKEND_URL}/users/${userId}/expenses/${id}.json?auth=${token}`,
    );
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}
