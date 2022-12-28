import {useState, useEffect} from 'react';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

import {tasks as data} from './tasks';

function App () {  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      setTasks(data);
  }, []);

  function CreateTask (taskTitle) {
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: "nueva tarea",
    }]);
  };

  return <>
    <TaskForm createTask={CreateTask} />
    <TaskList tasks={tasks}/>
  </>
};

export default App;