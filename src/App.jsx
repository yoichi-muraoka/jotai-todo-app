import TodoCreator from "./components/TodoCreator";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

export default function App() {
  return (
    <div className="container">
      <h1 className="my-3">MyTodo</h1>
      <TodoStats />
      <TodoFilter />
      <TodoCreator />
      <TodoList />
    </div>
  );
}
