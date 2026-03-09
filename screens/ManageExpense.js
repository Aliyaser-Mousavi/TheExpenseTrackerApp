import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  return (
    <View>
      <Text>MangeExpenses</Text>
    </View>
  );
};

export default ManageExpenses;
