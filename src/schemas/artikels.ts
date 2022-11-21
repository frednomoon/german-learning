import z from "./utils"

export default {
  columns: [
    z("der", 1),
    z("die", 1),
    z("das", 1),
    z("die", 1),
    z("ein", 1),
    z("eine", 1),
    z("ein", 1),
  ],
  rows: [z("Akk", 1), z("Dat", 1), z("Gen", 3)],
  answers: [
    ["den", "die", "das", "die", "einen", "eine", "ein"],
    ["dem", "der", "dem", "den", "einem", "einer", "einem"],
    ["des", "der", "des", "der", "eines", "einer", "eines"],
  ],
}
