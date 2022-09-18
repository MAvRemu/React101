import NavBar from "./components/NavBar";
import ExpenseItem from "./components/ExpenseItem";


function App() {
  return (
    <div>
      <NavBar />
      <h2>Let's get started!</h2>
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
