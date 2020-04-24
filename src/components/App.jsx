import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [itemText, setText] = useState("");
  const [items, setItems] = useState([]);

  function handlechange(event) {
    const { value } = event.target;
    setText(value);
  }

  function handleClick() {
    setItems(prevValue => {
      return [...prevValue, items];
    });
    //setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={itemText} onChange={handlechange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => {
            return <li>{itemText}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
