"use client";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const ToDo = () => {
  const { todoId } = useParams();

  const [details, setDetails] = React.useState("");

  useEffect(() => {
    if (todoId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((res) => {
          setDetails(res.data.title);
        });
    }
  }, [todoId]);

  return (
    <Container>
      <Stack fontSize={20} fontWeight={700}>{details}</Stack>
    </Container>
  );
};
export default ToDo;
