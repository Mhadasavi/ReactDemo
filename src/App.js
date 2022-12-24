import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseItems = [
    { id: 1, itemName: "PC", itemPrice: 100, date: new Date(2022, 6, 25) },
    { id: 2, itemName: "Mobile", itemPrice: 50, date: new Date(2022, 6, 25) },
  ];
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <div>
        <ExpenseItem
          name={expenseItems[0].itemName}
          price={expenseItems[0].itemPrice}
          date={expenseItems[0].date}
        ></ExpenseItem>
        <ExpenseItem
          name={expenseItems[1].itemName}
          price={expenseItems[1].itemPrice}
          date={expenseItems[1].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
