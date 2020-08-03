import { ADD_EXPENSE, REMOVE_EXPENSE } from '../../types/types';

const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return [...state, payload.expenses];

    case REMOVE_EXPENSE:
      return state.filter(expenses => expenses.id !== payload.id);

    default:
      return state;
  }
};

export default expenseReducer;
