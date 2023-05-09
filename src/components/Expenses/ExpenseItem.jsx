import React from 'react';

import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const { date, title, amount } = props;

  return (
    <li className="expenses-list__items">
      <Card className="expense-item">
        <ExpenseDate date={date} />

        <h2 className="expense-item__title">{title}</h2>
        <h3 className="expense-item__price">${amount}</h3>
      </Card>
    </li>
  );
}

export default ExpenseItem;
