import { useState } from "react"
import Table from "./components/Table"
import { Button } from "@mantine/core"
import useSubscription from "./utils/useSubscription"

function App() {
  const [checked, setChecked] = useState(false)
  const [subToShowAnswers, showAnswersEvent] = useSubscription()
  const [subToReset, resetEvent] = useSubscription()

  return (
    <div className='mx-8 my-6'>
      <h1>German Grammar Memory Training</h1>
      <Button
        variant='outline'
        className='my-2 mr-2'
        onClick={() => setChecked((prev) => !prev)}
      >
        Check Answers
      </Button>

      <Button
        variant='outline'
        color='yellow'
        className='my-2 mr-2'
        onClick={showAnswersEvent}
      >
        Show Answers
      </Button>

      <Button
        variant='outline'
        color='red'
        className='my-2 mr-2'
        onClick={resetEvent}
      >
        Clear Answers
      </Button>

      <h2 className='mt-4'>Artikels</h2>
      <Table
        data={artikels}
        cols={artikelCols}
        rows={artikelRows}
        checked={checked}
        subToShowAnswers={subToShowAnswers}
        subToReset={subToReset}
      />
      <h2 className='mt-4'>Pronouns</h2>
      <Table
        data={pronouns}
        cols={pronounCols}
        rows={pronounRows}
        checked={checked}
        subToShowAnswers={subToShowAnswers}
        subToReset={subToReset}
      />
      <h2 className='mt-4'>Adjective endings</h2>
      <div className='grid grid-cols-2'>
        <div>
          <h3>Indefinit - ein & *ein (singular)</h3>
          <Table
            data={adjectivesIndefinit}
            cols={adjectivesCols}
            rows={adjectivesRows}
            checked={checked}
            subToShowAnswers={subToShowAnswers}
            subToReset={subToReset}
          />
        </div>
        <div>
          <h3>Definit - der & *ein (plural)</h3>
          <Table
            data={adjectivesDefinit}
            cols={adjectivesCols}
            rows={adjectivesRows}
            checked={checked}
            subToShowAnswers={subToShowAnswers}
            subToReset={subToReset}
          />
        </div>
      </div>
    </div>
  )
}

const artikelCols = ["der", "die", "das", "die", "ein", "eine", "ein"]
const artikelRows = ["Akk", "Dat"]
const artikels = [
  ["den", "die", "das", "die", "einen", "eine", "ein"],
  ["dem", "der", "dem", "den", "einem", "einer", "einem"],
]

const pronounCols = [
  "I",
  "you (informal)",
  "You (formal)",
  "	he",
  "she",
  "it",
  "we",
  "they",
  "you (plural informal)",
]
const pronounRows = ["Nom", "Akk", "Dat"]
const pronouns = [
  ["ich", "du", "Sie", "er", "sie", "es", "wir", "sie", "ihr"],
  ["mich", "dich", "Sie", "ihn", "sie", "es", "uns", "sie", "euch"],
  ["mir", "dir", "Ihnen", "ihm", "ihr", "ihm", "uns", "ihnen", "euch"],
]

const adjectivesCols = ["M", "F", "N", "PL"]
const adjectivesRows = ["Nom", "Akk", "Dat"]
const adjectivesDefinit = [
  ["e", "e", "e", "e"],
  ["en", "e", "e", "e"],
  ["en", "en", "en", "en"],
]

const adjectivesIndefinit = [
  ["er", "e", "es", "e"],
  ["en", "e", "es", "e"],
  ["en", "en", "en", "en"],
]

export default App
