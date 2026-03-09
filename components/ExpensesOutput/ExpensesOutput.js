import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 58.99,
    date: new Date("2025-12-3"),
  },
  {
    id: "e2",
    description: "A pair of shoes",
    amount: 58.99,
    date: new Date("2025-12-3"),
  },
  {
    id: "e3",
    description: "A pair of shoes",
    amount: 58.99,
    date: new Date("2025-12-3"),
  },
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 58.99,
    date: new Date("2025-12-3"),
  },
];
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const colors = GlobalStyles.colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: colors.primary700,
  },
});
