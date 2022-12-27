import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
      </div>
      <div className="expense-item__price">{props.price}</div>
    </div>
  );
}
export default ExpenseItem;
