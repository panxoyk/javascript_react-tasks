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

  return <>
    <TaskForm createTask={CreateTask} />
    <TaskList tasks={tasks}/>
  </>
};

export default App;