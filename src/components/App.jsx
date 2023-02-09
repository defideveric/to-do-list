import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);



  //Adding Items To List
  function addItem(inputText) {
    setItems( (prevItems) => {
      return [...prevItems, inputText]
    });
  }



  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id 
      });
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={addItem}/>
      <div>
        <ul>
          {items.map((toDoItem, index) => ( 
            <ToDoItem 
            key={index} 
            id={index} 
            text={toDoItem} 
            onChecked={deleteItem}/>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
