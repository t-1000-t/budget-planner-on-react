import { SAVE_BUDGET } from '../../types/types';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case SAVE_BUDGET:
      return state + action.payload.budget;

    default:
      return state;
  }
};

export default budgetReducer;
