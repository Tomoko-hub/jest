import { useState } from 'react';
import TodoTable from './TodoTable';
import './App.css';

function App() {
/*   const [ todo, setTodo ] = useState({description: '', date: ''});
  const [ todos, setTodos ] = useState([]);

  const inputChanged =(event)=>{
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo =()=>{
    setTodos([...todos, todo]);
    setTodo({description: '', date:''})
  }

  const deleteTodo=(row)=>{
    setTodos(todos.filter((todo, index)=>index !== row));
  } */

    const [ userInfo, setUserInfo ] = useState({firstname: '', lastname: '', email: '', phone: ''});

    const inputChanged=(event)=>{
      setUserInfo({...userInfo, [event.target.name]: event.target.value});
    }

    const handleSubmit =(event)=>{
      event.preventDefault();
      const { firstname, lastname, email, phone } = userInfo;
      if(!firstname|| !lastname || !email || !phone){
        alert('All fields are reauired.')
      } else {
        alert(`Welcome ${userInfo.firstname} ${userInfo.lastname}`);
        setUserInfo({
          firstname: '',
          lastname: '',
          email: '',
          phone: ''
        });
      }
    }

    
  return (
    <div className="App">
      {/* <input placeholder='Description' name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder='Date' name="date" value={todo.date} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo}  /> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input placeholder='First name' name='firstname' value={userInfo.firstname} onChange={inputChanged} />
          </label>
        </div>
        <div>
          <label>
            <input placeholder='Last name' name='lastname' value={userInfo.lastname} onChange={inputChanged} />
          </label>
        </div>
        <div>
          <label>
            <input placeholder='Email' name='email' value={userInfo.email} onChange={inputChanged} />
          </label>
        </div>
        <div>
          <label>
            <input placeholder='Phone' name='phone' value={userInfo.phone} onChange={inputChanged} />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
