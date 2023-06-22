import { Todo } from "@/types/todo";
import { useCallback, useMemo, useState } from "react";

interface ReturnValue {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  addTodo: (todo: Todo) => void;
  toggleIsDone: (id: number) => void;
}

export const useTodoList = (): ReturnValue => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: "First",
      isDone: false,
      id: 1,
    },
    {
      title: "Second",
      isDone: true,
      id: 2,
    },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const toggleIsDone = useCallback(
    (id: number) => {
      const newTodoList = todos.map((item) => {
        if (item.id === id) {
          const newItem: Todo = { ...item, isDone: !item.isDone };
          return newItem;
        }
        return item;
      });

      setTodos(newTodoList);
    },
    [todos]
  );

  const deleteTodo = useCallback(
    (id: number) => {
      const newTodoList = todos.filter((item) => item.id !== id);

      setTodos(newTodoList);
    },
    [todos]
  );

  return useMemo(
    () => ({
      deleteTodo,
      addTodo,
      todos,
      toggleIsDone,
    }),
    [deleteTodo, todos, toggleIsDone]
  );
};
