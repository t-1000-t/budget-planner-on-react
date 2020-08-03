import { connect } from 'react-redux';
import App from './App';
import { getExpense } from '../../redux/Selectors';

const mapStateToProps = state => {
  return {
    expenses: getExpense(state),
  };
};

export default connect(mapStateToProps)(App);
