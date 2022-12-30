import {useState, useEffect} from 'react';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import {tasks as data} from './data/tasks';

function App () {  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      setTasks(data);
  }, []);

  function CreateTask (task) {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description,
    }]);
  };

  function DeleteTask (taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return <>
    <TaskForm createTask={CreateTask} />
    <TaskList tasks={tasks} deleteTask={DeleteTask} />
  </>
};

export default App;