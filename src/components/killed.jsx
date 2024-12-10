export const Killed = ({ killedTimer ,onRestore}) => {
    return (
      <tr className="bg-gray-800 border-b border-gray-600 hover:bg-gray-700">
        <td className="px-6 py-4">{killedTimer.id}</td>
        <td className="px-6 py-4">
          {new Date(killedTimer.id).getMinutes()}:{new Date(killedTimer.id).getSeconds()}
        </td>
        <td className="px-6 py-4">
          {new Date(killedTimer.endTime).getMinutes()}:{new Date(killedTimer.endTime).getSeconds()}
        </td>
        <td className="px-6 py-4">
          {new Date(killedTimer.activeTime * 1000).getMinutes()}:
          {new Date(killedTimer.activeTime * 1000).getSeconds()}
        </td>
        <td className="px-6 py-4 text-center">
            <button 
            onClick={() => onRestore(killedTimer.id, killedTimer.activeTime, killedTimer.endTime)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 disabled:opacity-50">Restore</button>
        </td>
      </tr>
    )
  }
  