import { HotTable } from "@handsontable/react"
import { registerAllModules } from "handsontable/registry"
import "handsontable/dist/handsontable.full.min.css"
import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"

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
  show: boolean
}) {
  const checked = props.checked
  const answers = useRef<Answers>(blanked(props.data))
  const hotRef = useRef<HotTable>(null)
  //   useEffect(() => {
  //     debugger
  //     const hot = hotRef.current?.hotInstance

  //     if (!hot) return
  //     if (props.show) {
  //       hot.loadData(props.data)
  //       return
  //     }
  //     hot.loadData(blanked(props.data))
  //   }, [props.show])

  return (
    <div>
      <HotTable
        ref={hotRef}
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
