import { useState } from 'react';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleToDoList = () => {
    if (toDoList.includes(toDo)) {
      alert("Task Already Exists");
    } else {
      setToDoList([...toDoList, toDo]);
      setToDo(""); // Clear the input field after adding a task
    }
  };

  const handleCloseTask = (e) => {
    if (confirm("Do you want to delete this Task?")) {
      const temp = toDoList.filter((v, i) => i !== parseInt(e.target.id));
      setToDoList(temp);
    }
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <input 
        type='text' 
        value={toDo}
        onChange={(e) => setToDo(e.target.value)} 
        placeholder='Task Name'
      />
      <button onClick={handleToDoList}>Add Task</button>

      {toDoList.length > 0 && toDoList.map((v, i) => {
        return (
          <div className="task" key={i}>
            <span>{v}</span>
            <button id={i} onClick={handleCloseTask}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;