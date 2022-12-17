import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <div>
        <ExpenseItem></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
