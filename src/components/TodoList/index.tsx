"use client";

import React from "react";
import AddTodoForm from "@/components/AddTodoForm";
import TodoItem from "@/components/TodoItem";
import { useTodoList } from "@/hooks/useTodoList";

import s from "./styles.module.scss";

const TodoList = () => {
  const { deleteTodo, addTodo, todos, toggleIsDone } = useTodoList();

  return (
    <main className={s.todo}>
      <h1 className={s.title}>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem
            {...item}
            toggleIsDone={toggleIsDone}
            deleteTodo={deleteTodo}
            key={item.id}
          />
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
