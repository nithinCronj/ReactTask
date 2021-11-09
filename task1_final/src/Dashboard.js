import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Task from './components/Task';
import { useNavigate } from "react-router-dom" 

function Dashboard() {
  const [tasks, setTasks]=useState([]);
  const [searchIn,setSearchIn] =useState("")
  const [showAddTask, setShowAddTask]=useState(false);

// Fetching from Local Storage
const getTasks = JSON.parse(localStorage.getItem("taskAdded"));
useEffect(() => {
    if (getTasks == null) {
        setTasks([])
    } else {
        setTasks(getTasks);
    }
}, [])
// Add Task
const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
  
    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
}
// Delete Task
const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
   
    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
}
// Edit Task
const editTask = (id) => {
    const name = prompt(" Name");
    const age = prompt("Age");
    let data = JSON.parse(localStorage.getItem('taskAdded'));
    const myData = data.map(x => {
        if (x.id === id) {
            return {
                ...x,
                name: name,
                age: age,
                id: uuidv4()
            }
        }
        return x;
    })
   
   
    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
}

const handleChange = e => {
  console.log( e.target.value);
 /*  this.setState({ inputValue: e.target.value });
  this.props.onChange(e); */
  setSearchIn(e.target.value)
};
let history = useNavigate()

  return (
    <div className="Dash">
     {/* { this.props.history.push('/main')} */}{ history("/home") }
      <div className="container">
       
        <Header showForm={()=> setShowAddTask(!showAddTask)}/>
        {showAddTask && <AddTask onSave={addTask}/>}
        <input type="text" placeholder="search .."  onChange={handleChange}/>

        {
        Task.length>0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} searchText={searchIn} />) : ('No task found')
        }
      </div>
    </div>
  );
}

export default Dashboard;
