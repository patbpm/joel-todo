import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo, completeTodo } from './redux/todoReducer.js';

function App() {
  const todos = useSelector(state => state.todos.list);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");


  const handleAddTodo = () => {
    if(newTodo){
      dispatch(addTodo(newTodo));
      setNewTodo("")
    }else{
      alert("Please add a Todo")
    }
  }
  return (
    <div className="app">
      <h1>MY TODO APP</h1>
      <div>
        <div>
          <input
            type='text'
            onChange = {(e)=> setNewTodo(e.target.value)}
            value={newTodo}
          />
          <button onClick={(e)=> handleAddTodo()} >ADD TODO</button>  
        </div>
        
        <ul>

          {todos.map(todo => (
            <li key ={todo.id}>
              <table>
                <th>
                  <th>Content</th>
                  <th>COMPLETED?</th>
                </th>
                <tr>
                  <td>{todo.content}</td>
                  <td>{todo.completed?"YES":"NO"}</td>
                </tr>
               
              </table>
              
              
            </li>
          ))

          }
        </ul>
      </div>
     
      
    </div>
  );
}

export default App;
