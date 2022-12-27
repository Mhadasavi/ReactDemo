import logo from "./logo.svg";
import "./App.css";
import ExpenseComponent from "./components/ExpenseComponent";
// import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseItems = [
    { id: 1, itemName: "PC", itemPrice: 100, date: new Date(2022, 5, 25) },
    { id: 2, itemName: "Mobile", itemPrice: 50, date: new Date(2022, 5, 25) },
  ];
  return (
    <div className="App">
      
      <div>
        <ExpenseComponent expenseItemsObject={expenseItems}></ExpenseComponent>
      </div>
    </div>
  );
}

export default App;
