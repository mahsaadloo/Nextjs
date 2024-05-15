import Todoz from "@/components/Todoz";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function FakeTodoz() {
  const fakeTodos = await getData();
  return (
    <>
      <Todoz todoz={fakeTodos} />
    </>
  );
}
