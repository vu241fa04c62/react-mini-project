function TaskFilter({ currentFilter, onFilterChange, counts }) {
  const filters = ['All', 'Pending', 'Completed'];

  return (
    <div className="task-filter-container">
      <div className="task-stats">
        <span>Total: <strong>{counts.total}</strong></span>
        <span>Pending: <strong>{counts.pending}</strong></span>
        <span>Completed: <strong>{counts.completed}</strong></span>
      </div>

      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TaskFilter;