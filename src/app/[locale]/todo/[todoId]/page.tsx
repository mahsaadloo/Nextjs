"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const ToDo = () => {
  const params = useParams();

  console.log(params);
  return <div>hi {`${params.todoId}`}</div>;
};
export default ToDo;
