import shortid from 'shortid';
import * as types from '../../types/types';

const addExpenseAction = expenses => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expenses: {
        id: shortid.generate(),
        ...expenses,
      },
    },
  };
};

const removeExpenseAction = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: { id },
  };
};

export { addExpenseAction, removeExpenseAction };
