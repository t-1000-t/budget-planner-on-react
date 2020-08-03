import * as types from '../../types/types';

const saveBudgetAction = value => {
  return {
    type: types.SAVE_BUDGET,
    payload: {
      budget: value,
    },
  };
};

export default saveBudgetAction;
