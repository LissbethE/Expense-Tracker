const ExpenseDate = function (props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date u-margin-right-small">
      <h1 className="expense-date__month">{month}</h1>
      <p className="expense-date__year">{year}</p>
      <h2 className="expense-date__day">{day}</h2>
    </div>
  );
};

export default ExpenseDate;
