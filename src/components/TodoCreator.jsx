import { useSetAtom } from "jotai";
import { useRef } from "react";
import { todoListAtom } from "../atoms/todoAtom";
import { Todo } from "../model/Todo.class";

export default function TodoCreator() {
  const setTodoList = useSetAtom(todoListAtom);
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    if (title.trim()) {
      setTodoList((prev) => [...prev, new Todo(title)]);
    }

    titleRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Title:
        <input type="text" ref={titleRef} className="ms-2" />
        <input type="submit" className="btn btn-primary ms-3" value="ADD" />
      </p>
    </form>
  );
}
