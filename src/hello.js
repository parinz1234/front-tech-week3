// const name = 'Parinya'
// const sayHi = who => `Hello, ${who}!`
// console.log(sayHi(name))

import {sayHi} from './function'
const name = 'olan'
console.log(sayHi(name))


import axios from 'axios'
const batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json'
axios.get(batmanUrl)
    .then(response => {
      console.log(response)
    })
