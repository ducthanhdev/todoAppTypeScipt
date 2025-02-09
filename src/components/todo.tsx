import { Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Icon = ({
  todoId,
  isCompleted,
  updateIsCompleted,
}: {
  todoId: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <div onClick={() => updateIsCompleted(todoId)}>
      {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
};

export const Todo = ({
  todoId,
  name,
  isCompleted,
  updateIsCompleted,
  deleteTodo,
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px"}}>
      <Button
        style={{ justifyContent: "space-between" }}
        fullWidth={true}
        endIcon={
          <Icon
            todoId={todoId}
            isCompleted={isCompleted}
            updateIsCompleted={updateIsCompleted}
          />
        }
      >
        {name}
      </Button>
      <Button 
        variant="outlined" 
        color="error" 
        onClick={() => deleteTodo(todoId)}  
      >
        Xóa
      </Button>
    </div>
  );
};

export default Todo;
