import { TodoType } from "../App";
import Todo from "./todo";

const TodoList = ({
  todoList,
  updateIsCompleted,
  deleteTodo,
}: {
  todoList: TodoType[];
  updateIsCompleted: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        {todoList.map((todo) => (
          <Todo
          
            deleteTodo={deleteTodo}
            todoId={todo.id}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            updateIsCompleted={updateIsCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
