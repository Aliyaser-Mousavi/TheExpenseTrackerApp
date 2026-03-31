import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import { GlobalStyles } from "./constants/style";
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";
import { useState } from "react";
import CustomSplashScreen from "./components/UI/SplashScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const colors = GlobalStyles.colors;

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.primary700,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        tabBarStyle: {
          backgroundColor: colors.primary700,
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarActiveTintColor: colors.accent500,
        tabBarInactiveTintColor: colors.primary200,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add-circle"
            size={32}
            color={colors.accent500}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "flash" : "flash-outline"}
              size={size + 4}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "wallet" : "wallet-outline"}
              size={size + 4}
              color={color}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  if (!isAppReady) {
    return <CustomSplashScreen onFinish={() => setIsAppReady(true)} />;
  }
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: colors.primary500 },
              headerTintColor: "white",
              animation: "slide_from_bottom",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
                title: "Manage Expense",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
