import { createSelector } from 'reselect';

const getBudget = state => state.budget;

const getExpense = state => state.expenses;

const getTotalExpenses = createSelector([getExpense], expenses =>
  expenses.reduce((total, expense) => total + Number(expense.amount), 0),
);

const getBalance = state => {
  return getBudget(state) - getTotalExpenses(state);
};

export { getBudget, getExpense, getBalance, getTotalExpenses };
