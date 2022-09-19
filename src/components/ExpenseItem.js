import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <h1>{props.title}</h1>
      <div className="expense-item__description">
        <ExpenseDate date={props.date}></ExpenseDate>
        <h3 className="expense-item__price">€{props.amount}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
