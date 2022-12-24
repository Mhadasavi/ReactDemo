import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
      </div>
      <div className="expense-item__price">{props.price}</div>
    </div>
  );
}
export default ExpenseItem;
