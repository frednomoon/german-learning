import z from "./utils"

export default {
  columns: [
    z("I", 1),
    z("you (informal)", 1),
    z("You (formal)", 1),
    z("he", 1),
    z("she", 1),
    z("it", 1),
    z("we", 1),
    z("they", 1),
    z("you (plural informal)", 1),
  ],
  rows: [z("Nom", 1), z("Akk", 2), z("Dat", 2), z("Gen", 3)],

  answers: [
    ["ich", "du", "Sie", "er", "sie", "es", "wir", "sie", "ihr"],
    ["mich", "dich", "Sie", "ihn", "sie", "es", "uns", "sie", "euch"],
    ["mir", "dir", "Ihnen", "ihm", "ihr", "ihm", "uns", "ihnen", "euch"],
  ],
}
