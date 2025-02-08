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
  updateIsCompleted: (todoId : string) => void;
}) => {
  return <div onClick={() => updateIsCompleted(todoId)}>{isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</div>;
};
export const Todo = ({
  todoId,
  name,
  isCompleted,
  updateIsCompleted,
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <div>
      <Button
        style={{ justifyContent: "space-between" }}
        fullWidth={true}
        endIcon={<Icon todoId={todoId} isCompleted={isCompleted}  updateIsCompleted={updateIsCompleted}/>}
      >
        {name}
      </Button>
    </div>
  );
};

export default Todo;
