function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span className="task-title">{task.title}</span>
      </label>
      <button
        className="delete-btn"
        onClick={() => onDeleteTask(task.id)}
        aria-label="Delete task"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;