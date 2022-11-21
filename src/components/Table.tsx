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
}

export default function Table(props: {
  data: {
    answers: Answers
    columns: { value: string; level: number }[]
    rows: { value: string; level: number }[]
  }
  level: number
  checked: boolean
  subToShowAnswers: (callback: () => void) => () => void
  subToReset: (callback: () => void) => () => void
}) {
  const data = useRef<Answers>(blanked(props.data.answers))
  const hotRef = useRef<HotTable>(null)

  useEffect(() => {
    const showData = () => {
      props.data.answers.forEach((row, i) => {
        row.forEach((cell, j) => {
          hotRef.current?.hotInstance?.setDataAtCell(i, j, cell)
        })
      })
    }

    return props.subToShowAnswers(showData)
  }, [])

  useEffect(() => {
    const resetData = () => {
      props.data.answers.forEach((row, i) => {
        row.forEach((_, j) => {
          hotRef.current?.hotInstance?.setDataAtCell(i, j, "")
        })
      })
    }
    return props.subToReset(resetData)
  }, [])

  const rows = props.data.rows.filter((row) => row.level <= props.level)
  const columns = props.data.columns.filter(
    (column) => column.level <= props.level
  )

  if (rows.length < 1 || columns.length < 1) {
    return null
  }

  return (
    <div>
      <MemoisedTable
        ref={hotRef}
        data={data.current}
        rowHeaders={props.data.rows
          .filter((row) => row.level <= props.level)
          .map((row) => row.value)}
        colHeaders={props.data.columns
          .filter((row) => row.level <= props.level)
          .map((row) => row.value)}
        cells={(row, col) => {
          if (!props.checked) {
            return {}
          }
          const correct =
            data.current[row][col] === props.data.answers[row][col]

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
