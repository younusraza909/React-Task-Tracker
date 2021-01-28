import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  //onDelete is passed from app.js and is normal variable but if i want to pass argument with it i have to call is as arrow function
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
