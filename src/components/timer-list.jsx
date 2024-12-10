import { Timer } from "./timer"

export const TimerList = ({ timers, onDelete }) => {
  return (
    <div className="space-y-4">
      {timers.map((timer) => (
        <div className="bg-gray-700 p-4 rounded-lg shadow-md" key={timer.id}>
          <Timer key={timer.id} timer={timer} onDelete={onDelete} />
        </div>
      ))}
    </div>
  )
}
