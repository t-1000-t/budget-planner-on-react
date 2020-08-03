import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import { removeExpenseAction } from '../../redux/actions/expenseActions/expenseActions';
import { getExpense } from '../../redux/Selectors';

const mapStateToProps = state => {
  return {
    expenses: getExpense(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(removeExpenseAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
