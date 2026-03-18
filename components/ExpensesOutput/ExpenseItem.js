import { StyleSheet, Pressable, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const colors = GlobalStyles.colors;

const ExpenseItem = ({ description, amount, date, id }) => {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.dateText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  expenseItem: {
    padding: 16,
    marginVertical: 10,
    backgroundColor: colors.primary700,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  descriptionContainer: {
    flex: 1,
  },
  description: {
    fontSize: 17,
    marginBottom: 6,
    fontWeight: "600",
    color: "white",
  },
  dateText: {
    fontSize: 13,
    color: colors.primary200,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.primary800,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    minWidth: 90,
    borderWidth: 1,
    borderColor: colors.accent500,
  },
  amount: {
    color: colors.accent500,
    fontWeight: "bold",
    fontSize: 15,
  },
});
