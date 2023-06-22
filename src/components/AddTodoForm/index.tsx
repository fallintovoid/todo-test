"use client";

import React, { useState, MouseEvent } from "react";
import { Todo } from "@/types/todo";

import s from "./styles.module.scss";

type Props = {
  addTodo: (todo: Todo) => void;
};

const AddTodoForm = ({ addTodo }: Props) => {
  const [title, setTitle] = useState("");

  const onAddTodo = (e: MouseEvent) => {
    e.preventDefault();

    addTodo({ title, isDone: false, id: Date.now() });
    setTitle("");
  };

  return (
    <form className={s.form}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={onAddTodo} type="submit">
        Add new todo
      </button>
    </form>
  );
};

export default AddTodoForm;
