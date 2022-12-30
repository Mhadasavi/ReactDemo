import "./ExpenseComponent.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function ExpenseComponent(props){
    return(< Card className="expenses">
        <ExpenseItem 
    name={props.expenseItemsObject[0].itemName}
    price={props.expenseItemsObject[0].itemPrice}
    date={props.expenseItemsObject[0].date}
  > </ExpenseItem>
  <ExpenseItem
    name={props.expenseItemsObject[1].itemName}
    price={props.expenseItemsObject[1].itemPrice}
    date={props.expenseItemsObject[1].date}
   ></ExpenseItem>
  </Card>);
}
export default ExpenseComponent;