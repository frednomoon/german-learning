import { useState } from "react"
import Table from "./components/Table"

const artikelCols = ["M", "F", "N", "PL", "M", "F", "N"]
const artikelRows = ["Nom", "Akk", "Dat"]
const artikels = [
  ["der", "die", "das", "die", "ein", "eine", "ein"],
  ["den", "die", "das", "die", "einen", "eine", "ein"],
  ["dem", "der", "dem", "den", "einem", "einer", "einem"],
]

// pronounCols = I	you (informal)	You (formal)	he	she	it	we	they	you (plural informal)
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

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <div className=''>
      <button onClick={() => setChecked((prev) => !prev)}>Check Answers</button>
      <Table
        data={artikels}
        cols={artikelCols}
        rows={artikelRows}
        checked={checked}
      />
      <Table
        data={pronouns}
        cols={pronounCols}
        rows={artikelRows}
        checked={checked}
      />
      <Table
        data={adjectivesIndefinit}
        cols={adjectivesCols}
        rows={adjectivesRows}
        checked={checked}
      />
      <Table
        data={adjectivesDefinit}
        cols={adjectivesCols}
        rows={artikelRows}
        checked={checked}
      />
    </div>
  )
}

export default App
