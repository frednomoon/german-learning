import { HotTable } from "@handsontable/react"
import { registerAllModules } from "handsontable/registry"
import "handsontable/dist/handsontable.full.min.css"
import { useRef, useState } from "react"

// register Handsontable's modules
registerAllModules()

type Answers = string[][]
function blanked(input: Answers) {
  return input.map((row) => row.map(() => ""))
}

export default function Table(props: {
  data: Answers
  cols: string[]
  rows: string[]
  checked: boolean
}) {
  const checked = props.checked
  const answers = useRef<Answers>(blanked(props.data))

  return (
    <div>
      <HotTable
        data={answers.current}
        rowHeaders={props.rows}
        colHeaders={props.cols}
        afterChange={(changes, source) => {
          console.log(changes)
        }}
        cells={(row, col) => {
          if (!checked) return {}
          const correct = answers.current[row][col] === props.data[row][col]
          return {
            className: correct ? "text-green-500" : "text-red-500",
          }
        }}
        height='auto'
        licenseKey='non-commercial-and-evaluation' // for non-commercial use only
      />
    </div>
  )
}
