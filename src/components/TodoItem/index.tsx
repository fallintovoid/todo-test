"use client";

import React from "react";
import { Todo } from "@/types/todo";
import cn from "classnames";

import s from "./styles.module.scss";

interface Props extends Todo {
  toggleIsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ title, isDone, toggleIsDone, id, deleteTodo }: Props) => {
  return (
    <li
      className={cn(s.item, {
        [s.not_done]: !isDone,
        [s.done]: isDone,
      })}
    >
      <h3>{title}</h3>
      <div className={s.buttons}>
        <input
          type="checkbox"
          onClick={() => toggleIsDone(id)}
          defaultChecked={isDone}
        />
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
