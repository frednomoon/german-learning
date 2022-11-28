import { useState } from "react"
import Table from "./components/Table"
import { Button, NativeSelect } from "@mantine/core"
import useSubscription from "./utils/useSubscription"

import artikels from "./schemas/artikels"
import pronouns from "./schemas/pronouns"
import adjectivesIndefinit from "./schemas/adjectivesIndefinit"
import adjectivesDefinit from "./schemas/adjectivesDefinit"
import adjectivesOhne from "./schemas/adjectivesOhne"

const level = 5
function App() {
  const [checked, setChecked] = useState(false)

  const [subToShowAnswers, showAnswersEvent] = useSubscription()
  const [subToReset, resetEvent] = useSubscription()

  return (
    <div className='mx-8 my-10 max-w-[700px]'>
      <h1>German Grammar Memory Training</h1>
      {/* <h2>Level {level}</h2> */}
      <div className='bg-primary px-4 my-2 rounded'>
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
        {/* <NativeSelect
          data={new Array(5).fill(0).map((_, i) => `${i + 1}`)}
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
        /> */}
      </div>

      <h2 className='mt-4'>Artikels</h2>
      <Table
        data={artikels}
        checked={checked}
        level={level}
        subToShowAnswers={subToShowAnswers}
        subToReset={subToReset}
      />
      <h2 className='mt-4'>Pronouns</h2>
      <Table
        data={pronouns}
        checked={checked}
        level={level}
        subToShowAnswers={subToShowAnswers}
        subToReset={subToReset}
      />
      {level > 1 && (
        <>
          <h2 className='mt-4'>Adjective endings</h2>
          <div className='grid grid-cols-2'>
            <div>
              <h3>Indefinit - ein & *ein (singular)</h3>
              <Table
                data={adjectivesIndefinit}
                checked={checked}
                level={level}
                subToShowAnswers={subToShowAnswers}
                subToReset={subToReset}
              />
            </div>
            <div>
              <h3>Definit - der & *ein (plural)</h3>
              <Table
                data={adjectivesDefinit}
                checked={checked}
                level={level}
                subToShowAnswers={subToShowAnswers}
                subToReset={subToReset}
              />
            </div>
            {level > 2 && (
              <div>
                <h3>Definit - der & *ein (plural)</h3>
                <Table
                  data={adjectivesOhne}
                  checked={checked}
                  level={level}
                  subToShowAnswers={subToShowAnswers}
                  subToReset={subToReset}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default App
