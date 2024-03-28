import { useSetAtom } from "jotai";
import { todoListAtom } from "../atoms/todoAtom";

export default function TodoRow({ todo }) {
  const setTodoList = useSetAtom(todoListAtom);

  const handleChangeCompleted = () => {
    setTodoList((prev) =>
      [...prev].map((item) => {
        if (item.id === todo.id) {
          item.isComplete = !item.isComplete;
        }
        return item;
      })
    );
  };

  const handleDelete = () => {
    setTodoList((prev) => [...prev].filter((item) => item.id !== todo.id));
  };

  return (
    <tr className="align-middle">
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <label>
          <input
            type="checkbox"
            checked={todo.isComplete}
            className="me-2"
            onChange={handleChangeCompleted}
          />
          {todo.isComplete ? "完了" : "未完了"}
        </label>
      </td>
      <td>
        <button className="btn btn-warning" onClick={handleDelete}>
          DELETE
        </button>
      </td>
    </tr>
  );
}
