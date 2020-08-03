import { connect } from 'react-redux';
import saveBudgetAction from '../../redux/actions/budgetActions/budgetActions';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = dispatch => {
  return {
    onSave: budget => dispatch(saveBudgetAction(budget)),
  };
};

export default connect(null, mapDispatchToProps)(BudgetForm);
