import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateNewTodo from "./components/CreateNewTodo";
import TodoList from "./components/TodoList";

export type TodoType = { id: string; name: string; isCompleted: boolean };
function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList") ?? "[]");

    if (savedTodoList?.length) {
      return savedTodoList;
    }
    return [];
  });
  const [newToDoString, setNewToDoString] = useState<string>("");

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDoString(e.target.value);
  };

  const onAddingButtonClick = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newToDoString,
      isCompleted: false,
    };
    setTodoList([newTodoItem, ...todoList]);
    setNewToDoString("");
  };

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (todoId: string) => {
    const isDelete = window.confirm("Bạn có chắc muốn xóa không?");

    if (isDelete) {
      setTodoList((prevState) => {
        return prevState.filter((todo) => todo.id !== todoId);
      });
    }

    return todoList;
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div
        className="Container"
        style={{
          width: "50%",
          margin: "0 auto",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "blue",
            margin: "20px 0",
            textAlign: "center",
          }}
        >
          Text Note
        </p>
        <CreateNewTodo
          onAddingButtonClick={onAddingButtonClick}
          newToDoString={newToDoString}
          onNewTodoChange={onNewTodoChange}
        />
        <TodoList
          updateIsCompleted={updateIsCompleted}
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
