import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

const colors = GlobalStyles.colors;

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.primary700,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  period: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary100,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sum: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.accent500,
  },
});
