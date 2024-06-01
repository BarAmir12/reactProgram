import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import Clock from './components/Clock';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 'e1', title: 'mazda', amount: 30000, date: new Date(2020, 2, 28) },
    { id: 'e2', title: 'ford', amount: 20000, date: new Date(2020, 2, 27) },
    { id: 'e3', title: 'nisan', amount: 150000, date: new Date(2020, 1, 28) },
    { id: 'e4', title: 'honda', amount: 3303, date: new Date(2024, 2, 28) },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app">
      <Clock />
      <h2>Cars List</h2>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
