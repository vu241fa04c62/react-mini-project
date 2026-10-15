import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import './App.css';

const STORAGE_KEY = 'react_task_manager_tasks';

function App() {
  // Lazy initial state: Load saved tasks from localStorage on initial render
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
      return [];
    }
  });

  const [filter, setFilter] = useState('All');

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Pending') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true; // 'All'
  });

  // Bonus Challenge: Calculate task counts
  const counts = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>

      <main>
        <TaskForm onAddTask={addTask} />
        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={counts}
        />
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;