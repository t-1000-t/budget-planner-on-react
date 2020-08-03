import { connect } from 'react-redux';
import Values from './Values';
import { getBudget, getBalance, getTotalExpenses } from '../../redux/Selectors';

const mapStateToProps = state => {
  return {
    budget: getBudget(state),
    expenses: getTotalExpenses(state),
    balance: getBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
