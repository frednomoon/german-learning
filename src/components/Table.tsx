import { HotTable } from "@handsontable/react"
import { registerAllModules } from "handsontable/registry"
import "handsontable/dist/handsontable.full.min.css"

// register Handsontable's modules
registerAllModules()

// der	die	das	die	ein	eine	ein
// den	die	das	die	einen	eine	ein
// dem	der	dem	den	einem	einer	einem
const artikels = [
  ["der", "die", "das", "die", "ein", "eine", "ein"],
  ["den", "die", "das", "die", "einen", "eine", "ein"],
  ["dem", "der", "dem", "den", "einem", "einer", "einem"],
]

// ich	du	Sie	er	sie	es	wir	sie	ihr
// mich	dich	Sie	ihn	sie	es	uns	sie	euch
// mir	dir	Ihnen	ihm	ihr	ihm	uns	ihnen	euch
const pronouns = [
  ["ich", "du", "Sie", "er", "sie", "es", "wir", "sie", "ihr"],
  ["mich", "dich", "Sie", "ihn", "sie", "es", "uns", "sie", "euch"],
  ["mir", "dir", "Ihnen", "ihm", "ihr", "ihm", "uns", "ihnen", "euch"],
]
export default function Table() {
  return (
    <HotTable
      data={artikels}
      rowHeaders={true}
      colHeaders={true}
      height='auto'
      licenseKey='non-commercial-and-evaluation' // for non-commercial use only
    />
  )
}
