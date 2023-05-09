import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = function (props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  /////////////////////////////
  const btn = (
    <div className="block">
      <button onClick={startEditingHandler} className="btn">
        Add New Expense
      </button>
    </div>
  );

  const form = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onStop={stopEditingHandler}
    />
  );

  return (
    <Card className="top-box u-margin-bottom-small-2">
      {!isEditing ? btn : form}
    </Card>
  );
};

export default NewExpense;
