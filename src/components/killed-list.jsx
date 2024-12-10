import { Killed } from "./killed"

export const KilledList = ({ killed,onRestore }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-gray-700 text-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-600">
            <th className="px-6 py-3 text-left">ID</th>
            <th className="px-6 py-3 text-left">Start Time</th>
            <th className="px-6 py-3 text-left">End Time</th>
            <th className="px-6 py-3 text-left">Overall Duration</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {killed.map((killedTimer) => (
            <Killed key={killedTimer.id} killedTimer={killedTimer} onRestore={onRestore}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}
