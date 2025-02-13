import { useState } from "react"
import { Heart } from "lucide-react"

function App() {
  const [response, setResponse] = useState<string | null>(null)

  const handleYes = () => {
    setResponse("Yay! I love you BUBU! 💖")
  }

  const handleNo = () => {
    setResponse("Hindi na Lablab! 😢")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center bg-[#7b3933] bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-valentine mb-6 animate-bounce-slow">Would you be my Valentine?</h1>
        <Heart className="w-24 h-24 mx-auto text-valentine animate-pulse" />
        {response ? (
          <p className="mt-6 text-white text-2xl font-semibold text-gray-800">{response}</p>
        ) : (
          <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <button
              onClick={handleYes}
              className="bg-valentine px-6 py-2 rounded-full hover:bg-valentine-dark transition duration-300 transform hover:scale-105"
            >
              Yes!
            </button>
            <button
              onClick={handleNo}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition duration-300 transform hover:scale-105"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

