import { useEffect, useRef, useState } from "react"

export const Timer = ({ timer: { id , active, endTime }, onDelete }) => {
  const [isAlive, setIsAlive] = useState(true)
  const [second, setSecond] = useState(endTime?endTime.getSeconds():new Date().getSeconds())
  const [minutes, setMinutes] = useState(endTime?endTime.getMinutes():new Date().getMinutes())
  let interval = useRef(null)
  let activeTime = useRef(active)

  useEffect(() => {
    if (isAlive) {
      interval.current = setInterval(() => {
        if(minutes === 0 && second === 0){
            onDelete(id, activeTime.current, new Date(id - activeTime.current * 1000))        
        }
        setSecond((second) => (second === 0 ? 59 : second - 1))
        activeTime.current++
      }, 1000)
    } else {
      clearInterval(interval.current)
    }

    return () => clearInterval(interval.current)
  }, [isAlive])

  useEffect(() => {
    if (second === 59) {
      setMinutes((minute) => minute - 1)
    }
  }, [second])

  return (
    <>
      <p>{id}</p>
      <h3>
        {Math.floor(minutes / 10) === 0 ? '0' + minutes : minutes}:
        {Math.floor(second / 10) === 0 ? '0' + second : second}
      </h3>

      <button
        onClick={() => setIsAlive(false)}
        disabled={!isAlive}
        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200 disabled:opacity-50"
      >
        Pause
      </button>
      <button
        onClick={() => setIsAlive(true)}
        disabled={isAlive}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 disabled:opacity-50"
      >
        Continue
      </button>
      <button
        onClick={() => onDelete(id, activeTime.current, new Date(id - activeTime.current * 1000))}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </>
  )
}
