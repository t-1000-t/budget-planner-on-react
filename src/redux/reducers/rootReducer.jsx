import { combineReducers } from 'redux';
import budgetReducer from '../actions/budgetActions/budgetReducer';
import expenseReducer from '../actions/expenseActions/expenseReducer';

export default combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});
