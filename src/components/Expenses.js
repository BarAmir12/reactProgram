import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({ expenses }) {
    return (
        <div className="expenses">
            <h2>This is my car</h2>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default Expenses;
