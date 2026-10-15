import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Task title cannot be empty.');
      return;
    }

    onAddTask(trimmedTitle);
    setTitle(''); // Clear input after adding
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          className="task-input"
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </form>
  );
}

export default TaskForm;