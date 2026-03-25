import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
const BACKEND_URL =
  "https://theexpensetrackerapp-f1677-default-rtdb.firebaseio.com";
export async function storeExpense(expenseData) {
  const net = await NetInfo.fetch();

  if (!net.isConnected) {
    throw new Error("NO_INTERNET");
  }

  try {
    const response = await axios.post(
      BACKEND_URL + "/expenses.json",
      expenseData,
    );

    return response.data.name;
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}

export async function fetchExpense() {
  const net = await NetInfo.fetch();

  if (!net.isConnected) {
    throw new Error("NO_INTERNET");
  }

  try {
    const response = await axios.get(BACKEND_URL + "/expenses.json");

    const expenses = [];
    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].data),
        description: response.data[key].description,
      };
      expenses.push(expenseObj);
    }

    return expenses;
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}

export async function updateExpense(id, expenseData) {
  const net = await NetInfo.fetch();

  if (!net.isConnected) {
    throw new Error("NO_INTERNET");
  }

  try {
    return await axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}
export async function deleteExpense(id) {
  const net = await NetInfo.fetch();

  if (!net.isConnected) {
    throw new Error("NO_INTERNET");
  }

  try {
    return await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
  } catch (error) {
    throw new Error("SERVER_ERROR");
  }
}
