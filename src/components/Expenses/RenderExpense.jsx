import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const RenderExpense = function ({ items }) {
  const [filterYear, setfilterYear] = useState('');
  const chanceFilterHandler = year => setfilterYear(year);

  const match = filterYear
    ? items.filter(e => e.date.getFullYear().toString() === filterYear)
    : items;

  return (
    <div className="expenses">
      <div className="left-box">
        <ExpensesList element={match} />
      </div>

      <Card className="right-box">
        <ExpenseFilter
          onChanceFilter={chanceFilterHandler}
          selected={filterYear}
        />

        <ExpensesChart expenses={match} />
      </Card>
    </div>
  );
};

export default RenderExpense;
