import { useState } from 'react'
import './App.css'
import { TimerList } from './components/timer-list'
import { KilledList } from './components/killed-list'

function App() {
  const [timers, setTimers] = useState([])
  const [killed, setKilled] = useState([])

  const handleDelete = (id, activeTime, endTime) => {
    console.log(endTime)
    setTimers([...timers.filter(item => item.id !== id)])
    setKilled([...killed, { id, activeTime, endTime }])
  }
  
  const handleRestore = (id , active, endTime) => {
    setKilled([...killed.filter(item => item.id != id)])
    setTimers([...timers, {id, active, endTime}])
  }

  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-400">Active Timers</h1>
      <div className="text-center mb-6">
        <button
          onClick={() => setTimers([...timers, { id: Date.now() , active : 0 }])}
          className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
        >
          Create Timer
        </button>
      </div>

      <div className="flex justify-between space-x-8">
        <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg shadow-md">
          <TimerList timers={timers} onDelete={handleDelete} />
        </div>
        <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Ended Timers</h2>
          <KilledList killed={killed} onRestore={handleRestore}/>
        </div>
      </div>
    </div>
  )
}

export default App
