import { HotTable } from "@handsontable/react"
import { registerAllModules } from "handsontable/registry"
import "handsontable/dist/handsontable.full.min.css"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import MemoisedTable from "./MemoisedTable"

// register Handsontable's modules
registerAllModules()

type Answers = string[][]
function blanked(input: Answers) {
  const length = input.length
  const width = input[0].length
  const output = new Array(length).fill(0).map(() => new Array(width).fill(""))
  return output
  //   const unreferenced = JSON.parse(JSON.stringify(input)) as Answers
  //   return unreferenced.map((row) => row.map(() => ""))
}

export default function Table(props: {
  id: string
  data: Answers
  cols: string[]
  rows: string[]
  checked: boolean
  subToShowAnswers: (callback: () => void) => () => void
  subToReset: (callback: () => void) => () => void
}) {
  const data = useRef<Answers>(blanked(props.data))
  const hotRef = useRef<HotTable>(null)

  useEffect(() => {
    const showData = () => {
      props.data.forEach((row, i) => {
        row.forEach((cell, j) => {
          hotRef.current?.hotInstance?.setDataAtCell(i, j, cell)
        })
      })
    }

    return props.subToShowAnswers(showData)
  }, [])

  useEffect(() => {
    const resetData = () => {
      props.data.forEach((row, i) => {
        row.forEach((_, j) => {
          hotRef.current?.hotInstance?.setDataAtCell(i, j, "")
        })
      })
    }
    return props.subToReset(resetData)
  }, [])

  return (
    <div>
      <MemoisedTable
        key={props.id}
        id={props.id}
        ref={hotRef}
        data={data.current}
        rowHeaders={props.rows}
        colHeaders={props.cols}
        cells={(row, col) => {
          if (!props.checked) {
            return {}
          }
          const correct = data.current[row][col] === props.data[row][col]

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
