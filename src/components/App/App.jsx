import React from 'react';
import styled from 'styled-components';
import BudgetForm from '../BudgetForm/BudgetFormContainer';
import ExpenseForm from '../ExpenseForm/ExpensesFormContainer';
import ExpensesTable from '../ExpensesTable/ExpensesTableContainer';
import Values from '../Value/ValuesContainer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      {expenses.length > 0 && <ExpensesTable items={expenses} />}
    </Container>
  );
};

export default App;
