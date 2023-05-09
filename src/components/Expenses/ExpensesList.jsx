import ExpenseItem from './ExpenseItem';

const ExpensesList = function ({ element }) {
  if (element.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found!🙈</h2>;
  }

  return (
    <ul className="expenses-list">
      {element.map((e, i) => (
        <ExpenseItem key={i} title={e.title} amount={e.amount} date={e.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;

