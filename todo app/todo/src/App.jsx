import React from "react";
import Header from "./components/header";
import Button from "./components/button";
import Todoitem from "./components/todoitem";

import "./App.css";

const Todo = () => {
  return (
    <div className="container">
      <Header />
      <Todoitem text="Eat"/>
      <Todoitem text="Sleep"/>
      <Todoitem text="Play"/>
      <Todoitem text="Study"/>
      <Todoitem text="Singing Practice"/>
      <Button/>
    </div>
    
  )
}

export default Todo;