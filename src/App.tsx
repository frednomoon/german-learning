import { useState } from "react"
import Table from "./components/Table"
import { Button } from "@mantine/core"

function App() {
  const [checked, setChecked] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <div className='mx-8 my-6'>
      <Button
        variant='outline'
        className='my-2'
        onClick={() => setChecked((prev) => !prev)}
      >
        Check Answers
      </Button>

      {/* <Button
        variant='outline'
        color='yellow'
        className='my-2'
        onClick={() => setShow((prev) => !prev)}
      >
        Show Answers
      </Button> */}

      <Table
        data={artikels}
        cols={artikelCols}
        rows={artikelRows}
        checked={checked}
        show={show}
      />
      <Table
        data={pronouns}
        cols={pronounCols}
        rows={artikelRows}
        checked={checked}
        show={show}
      />
      <Table
        data={adjectivesIndefinit}
        cols={adjectivesCols}
        rows={adjectivesRows}
        checked={checked}
        show={show}
      />
      <Table
        data={adjectivesDefinit}
        cols={adjectivesCols}
        rows={artikelRows}
        checked={checked}
        show={show}
      />
    </div>
  )
}

const artikelCols = ["M", "F", "N", "PL", "M", "F", "N"]
const artikelRows = ["Nom", "Akk", "Dat"]
const artikels = [
  ["der", "die", "das", "die", "ein", "eine", "ein"],
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
