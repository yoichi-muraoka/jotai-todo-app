import { useAtomValue } from "jotai";
import { filteredTodoListAtom } from "../atoms/todoAtom";
import TodoRow from "./TodoRow";

export default function TodoList() {
  const todos = useAtomValue(filteredTodoListAtom);

  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          <th>Manipulation</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}
