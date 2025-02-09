import { Button, TextField } from "@mui/material";
import  { ChangeEvent } from "react";

type Props = {
    onAddingButtonClick: () => void;
    newToDoString: string;
    onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
const CreateNewTodo = ({
  newToDoString,
  onNewTodoChange,
  onAddingButtonClick,
}: Props) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextField
        size="small"
        value={newToDoString}
        onChange={onNewTodoChange}
        style={{ width: "100%" }}
      />
      <Button variant="contained" onClick={onAddingButtonClick}>
        Thêm
      </Button>
    </div>
  );
};

export default CreateNewTodo;
