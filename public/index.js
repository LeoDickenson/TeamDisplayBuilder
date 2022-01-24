const inquirer = require('inquirer');
const fs = require('fs');

// NEED A CONSTRUCTOR THAT MAKES AN HTML CARD ELEMENT AND USES THE USER INPUT TO FILL CARD ELEMENT WITH TEAM MEMBER INFO
// HTML DOC NEEDS TO DISPLAY ALL ITEMS IN A FLEX ROW
// prompt for input with 4 options "add project managaer" "add engineer" "add Intern" "finish building team"
// finish building team creates the html
// add manager uses constructor to build manager object and stores string (html formatting) into a .txt fil
//add engineer uses constructor to build engineer object
//add intern uses constructor to build intern object
// finish building team reads the .txt file and then creates an html file from the .txt file data
function TeammateMaker(role, name, email, github) {
  this.role = role;
  this.name = name;
  this.email = email;
  this.github = github;

  // this.makeNoise = () => {
  //   if (this.raining === true) {
  //     console.log(this.noise);
  //   }
  // };
}

inquirer.prompt([
  {
    type: 'list',
    message: 'Please pick an option',
    name: 'menuChoice',
    choices: ['add engineer','add intern','finish building team'] 
  }])





.then((userInput) => { 

  if (userInput.menuChoice === 'add engineer')
   console.log('addin engineer');
  if (userInput.menuChoice === 'add intern')
  console.log('adding intern')
  inquirer.prompt([
  {
    type: 'input',
    message: 'enter name',
    name: 'name'
  }]).then((newMember) => {console.log(newMember)});
  if (userInput.menuChoice === 'finish building team')
  console.log('finishing team');

//   console.log(userInput.teammateName)
//   console.log(userInput.teammateEmail)

//   let testHTML = `    <div class="container">
//   <div class="col-sm-6">
//       <div class="card text-dark text-center bg-light mb-3" style="max-width: 18rem;">
//           <div class="card-header">Name</div>
//           <div class="card-body">
//               <h5 class="card-title">Role</h5>
//               <ul class="list-group list-group-flush">
//                   <li class="list-group-item">Email</li>
//                   <li class="list-group-item">A second item</li>
//                   <li class="list-group-item">A third item</li>
//               </p>
//           </div>
//       </div>
//   </div>
// </div>`

//   fs.appendFile('index.html', testHTML, (err) =>
//   err ? console.error(err) : console.log('Success!'))

});
