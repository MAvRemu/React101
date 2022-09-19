function ExpenseDate(props) {
  return <h2>{props.date.toISOString()}</h2>;
}

export default ExpenseDate;
