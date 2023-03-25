const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };


// create a reference to players array
let team = players;

// create a copy of players array
let team1 = players.slice();

// create a copy of person object
let cap1 = Object.assign({}, person);

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement


export {players,person,team,team1,cap1}
