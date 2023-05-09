import React, { useState } from 'react';

const ExpenseForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = e => setEnteredTitle(e.target.value);
  const amountChangeHandler = e => setEnteredAmount(e.target.value);
  const dateChangeHandler = e => setEnteredDate(e.target.value);

  const submitHandler = function (evento) {
    evento.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="expense-form__group">
        <label className="expense-form__label">Title</label>
        <input
          className="expense-form__input"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>

      <div className="expense-form__group">
        <label className="expense-form__label">Amount</label>
        <input
          className="expense-form__input"
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>

      <div className="expense-form__group">
        <label className="expense-form__label">Date</label>
        <input
          className="expense-form__input"
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>

      <div className="expense-form__actions">
        <button type="button" className="btn" onClick={props.onStop}>
          Cancel
        </button>

        <button type="submit" className="btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
