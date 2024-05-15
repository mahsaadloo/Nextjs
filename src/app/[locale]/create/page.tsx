'use client'
import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { onAddTodo } from "@/redux/todoSlice";

const CreateTask = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  console.log(name)
  return (
    <Box component="form" autoComplete="off">
      <Stack alignItems="center" justifyContent="center">
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          size="small"
          sx={{ marginTop: 2, marginBottom: 5 }}
          onClick={() => {
            dispatch(onAddTodo(name));
            setName("")
          }}
        >
          ADD
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTask;
