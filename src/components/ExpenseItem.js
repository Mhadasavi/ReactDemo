import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, demoFunction]=useState(props.name);
  const clickHandler = () => {
    demoFunction("Hi");
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.price}</div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
}
export default ExpenseItem;
