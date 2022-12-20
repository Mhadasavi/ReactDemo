import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate=new Date(2022,1,1);
  const expenseDescription='Boat headphone';
  const expenseItemprice=1800;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {expenseDescription}</h2>
      </div>
      <div className="expense-item__price">{expenseItemprice}</div>
    </div>
  );
}
export default ExpenseItem;
