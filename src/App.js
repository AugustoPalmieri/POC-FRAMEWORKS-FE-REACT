import { useState } from 'react';
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = () => {
    if (filter === "completed") return tasks.filter(task => task.completed);
    if (filter === "incomplete") return tasks.filter(task => !task.completed);
    return tasks;
  };

  const styles = {
    container: {
      width: '300px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      background: 'linear-gradient(135deg, #cceeff, #ffffff)',
    },
    input: {
      width: 'calc(100% - 22px)',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px'
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      display: 'block', 
      margin: '10px auto'  
  },
  
    
    filterBtn: {
      marginRight: '5px',
      backgroundColor: '#f8f9fa',
      color: '#333',
      cursor: 'pointer'
    },
    list: {
      listStyle: 'none',
      padding: '0'
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5px 0',
      borderBottom: '1px solid #eee'
    },
    completed: {
      textDecoration: 'line-through',
      color: '#777'
    }
  };
  
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="AÑADIR NUEVA TAREA"
          style={styles.input}
        />
        <button style={styles.button} onClick={addTask}>AÑADIR</button>
  
        <div>
          <button style={styles.filterBtn} onClick={() => setFilter("all")}>TODAS </button>
          <button style={styles.filterBtn} onClick={() => setFilter("completed")}>COMPLETAS</button>
          <button style={styles.filterBtn} onClick={() => setFilter("incomplete")}>INCOMPLETAS</button>
        </div>
  
        <ul style={styles.list}>
          {filteredTasks().map((task, index) => (
            <li key={index} style={task.completed ? styles.completed : styles.listItem}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(index)}
              />
              {task.text}
              <button onClick={() => deleteTask(index)}>ELIMINAR</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default TodoList;

