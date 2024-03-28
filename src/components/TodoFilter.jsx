import { useSetAtom } from "jotai";
import React from "react";
import { filterAtom } from "../atoms/todoAtom";

export default function TodoFilter() {
  const setFilter = useSetAtom(filterAtom);

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="my-2">
      Filtering:
      <select onChange={handleChangeFilter} className="ms-2">
        <option value="">全て</option>
        <option value="complete">完了</option>
        <option value="uncomplete">未完了</option>
      </select>
    </div>
  );
}
