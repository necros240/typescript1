import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
  deleteTask: ({ id }: { id: string }) => void;
};

function List({ tasks, toggleTask,deleteTask }: ListProps) {
  return (
    <ul className='list'>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className='task-text'>{task.description}</p>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => {
                toggleTask({ id: task.id });
              }}
            />
            <button
            onClick={() => {
              deleteTask({ id: task.id });
            }}
          >
            Delete
          </button>
        </li>
        );
      })}
    </ul>
  );
}
export default List;
