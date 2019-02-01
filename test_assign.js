const fp = require('lodash/fp');
const merge= require("lodash/fp/merge")
const produce = require("immer").produce

var state = {
    houses: {
      gryffindor: {
        points: 15
      },
      ravenclaw: {
        points: 18
      },
      hufflepuff: {
        points: 7
      },
      slytherin: {
        points: 5
      }
    }
  }

const key = "ravenclaw"

console.log("ORIGINAL:",state)
console.log("IMMER:",produce(state, draft=> { draft.houses[key].points+=3 }))
console.log("")
console.log("ORIGINAL:",state)
console.log("LODASH MERGE:",merge(state, {...state.houses[key].points+=3}))

