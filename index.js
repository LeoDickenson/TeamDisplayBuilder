const inquirer = require('inquirer');
const fs = require('fs');

// NEED A CONSTRUCTOR THAT MAKES AN HTML CARD ELEMENT AND USES THE USER INPUT TO FILL CARD ELEMENT WITH TEAM MEMBER INFO
// HTML DOC NEEDS TO DISPLAY ALL ITEMS IN A FLEX ROW
function TeammateMaker(name, email) {
  this.name = name;
  this.email = email;
  // this.makeNoise = () => {
  //   if (this.raining === true) {
  //     console.log(this.noise);
  //   }
  // };
}

inquirer.prompt([
  {
    type: 'input',
    message: 'What is your name?',
    name: 'teammateName',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'teammateEmail',
  },
])





.then((userInput) => { 

  console.log(userInput.teammateName)
  console.log(userInput.teammateEmail)

  fs.appendFile('log.txt', JSON.stringify(userInput), (err) =>
  err ? console.error(err) : console.log('Success!'))

});
