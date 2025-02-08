import { Button, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

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
    <div>
      <TextField
        size="small"
        value={newToDoString}
        onChange={onNewTodoChange}
      />
      <Button variant="contained" onClick={onAddingButtonClick}>
        Thêm
      </Button>
    </div>
  );
};

export default CreateNewTodo;
