import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';
import React, { useState, useEffect } from "react";

function ExpenseItem({ title: initialTitle, amount, date }) {
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        setTitle(initialTitle);
    }, [initialTitle]);

    const clickHandlerServer = () => {
        fetch(
            `http://localhost:3000/countries/${title}/${amount}/${date}`
        ).catch((err) => console.log(err));
    };

    const clickFunc = () => {
        setTitle("Updated");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickFunc}>Change Title</button>
            <button onClick={clickHandlerServer}>Add to Server</button>
        </Card>
    );
}

export default ExpenseItem;
