import { atom } from "jotai";
import { Todo } from "../model/Todo.class";

export const todoListAtom = atom([
  new Todo("履歴書の作成"),
  new Todo("買い物")
]);

export const filterAtom = atom("");

// 派生ステート
export const filteredTodoListAtom = atom((get) => {
  const todoList = get(todoListAtom);
  const filter = get(filterAtom);
  switch (filter) {
    case "complete":
      return todoList.filter((item) => item.isComplete);
    case "uncomplete":
      return todoList.filter((item) => !item.isComplete);
    default:
      return todoList;
  }
});

export const todoListStatsAtom = atom((get) => {
  const todoList = get(todoListAtom);
  const totalNum = todoList.length;
  const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
  const totalUncompletedNum = totalNum - totalCompletedNum;
  const percentCompleted =
    totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

  return {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  };
});
