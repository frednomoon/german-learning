import z from "./utils"

export default {
  columns: [z("M", 1), z("F", 1), z("N", 1)],
  rows: [z("Nom", 4), z("Akk", 5), z("Dat", 5), z("Gen", 5)],
  answers: [
    ["er", "es", "e"],
    ["en", "es", "e"],
    ["em", "em", "er"],
    ["en", "en", "er"],
  ],
}
