import React from "react";
import { TodoType } from "../App";
import Todo from "./todo";

const TodoList = ({
  todoList,
  updateIsCompleted,
}: {
  todoList: TodoType[];
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <Todo todoId={todo.id} key={todo.id} name={todo.name} isCompleted={todo.isCompleted} updateIsCompleted={updateIsCompleted}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
