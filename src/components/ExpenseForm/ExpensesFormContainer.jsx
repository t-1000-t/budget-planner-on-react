import { connect } from 'react-redux';
import ExpensesForm from './ExpenseForm';
import { addExpenseAction } from '../../redux/actions/expenseActions/expenseActions';
import { getBalance } from '../../redux/Selectors';

const mapStateToprops = state => {
  return {
    balance: getBalance(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: expenses => {
      dispatch(addExpenseAction(expenses));
    },
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(ExpensesForm);
