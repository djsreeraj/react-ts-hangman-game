import { useState } from 'react'
import words from './wordList.json'
function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  

  return (
    <div className="App">
      Welcome to Hangman App - {wordToGuess}
    </div>
  )
}

export default App
