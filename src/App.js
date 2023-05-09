import React, { useState } from 'react';
import RenderExpense from './components/Expenses/RenderExpense';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Book 1',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Book 2', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Book 3',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Book 4',
    amount: 450,
    date: new Date(2021, 8, 12),
  },
  {
    id: 'e5',
    title: 'Book 5',
    amount: 50,
    date: new Date(2020, 8, 13),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = function (expense) {
    if (!expense.title && !expense.amount) return;

    setExpenses(prevExpense => [expense, ...prevExpense]);
  };

  return (
    <div className="container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <RenderExpense items={expenses} />
    </div>
  );
}

export default App;
