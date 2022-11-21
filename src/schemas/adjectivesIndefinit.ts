import z from "./utils"

export default {
  columns: [z("M", 2), z("F", 2), z("N", 2), z("PL", 2)],
  rows: [z("Nom", 2), z("Akk", 2), z("Dat", 3), z("Gen", 3)],

  answers: [
    ["er", "e", "es", "e"],
    ["en", "e", "es", "e"],
    ["en", "en", "en", "en"],
    ["en", "en", "en", "en"],
  ],
}
