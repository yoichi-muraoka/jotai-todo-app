import { useAtomValue } from "jotai";
import { todoListStatsAtom } from "../atoms/todoAtom";

export default function TodoStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useAtomValue(todoListStatsAtom);

  const formattedPercentCompleted = Math.round(percentCompleted) + "%";

  return (
    <div className="p-2 my-3 bg-secondary text-white">
      <h2 className="h6">Stats:</h2>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </div>
  );
}
