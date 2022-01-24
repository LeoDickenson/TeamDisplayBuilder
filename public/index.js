const inquirer = require('inquirer');
const fs = require('fs');

const internTemplate = ({name, ID, email, github,}) =>
`<div class="col-sm-6">
  <div class="card text-dark text-center bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${name}</div>
    <div class="card-body">
        <h5 class="card-title">INTERN</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${ID}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${github}</li>
        </p>
    </div>
  </div>
</div>`;

const engineerTemplate = ({name, ID, email, github,}) =>
`<div class="col-sm-6">
  <div class="card text-dark text-center bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${name}</div>
    <div class="card-body">
        <h5 class="card-title">ENGINEER</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${ID}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${github}</li>
        </p>
    </div>
  </div>
</div>`;

const projectManagerTemplate = ({name, ID, email, office,}) =>
`<div class="col-sm-6">
  <div class="card text-dark text-center bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${name}</div>
    <div class="card-body">
        <h5 class="card-title">PROJECT MANAGER</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${ID}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${office}</li>
        </p>
    </div>
  </div>
</div>`;

const init = () => inquirer.prompt([
  {
    type: 'input',
    message: 'please enter the project manager name',
    name: 'name'
  },
  {
    type: 'input',
    message: 'enter project manager employee ID',
    name: 'ID'
  },
  {
    type: 'input',
    message: 'enter project manager email',
    name: 'email'
  },
  {
    type: 'input',
    message: 'enter project manager office number',
    name: 'office'
  },
]).then((answers) => {  fs.appendFile('index.html', projectManagerTemplate(answers), (err) =>
err ? console.error(err) : console.log(' ***PROJECT MANAGER SAVED***'))
}).then(() => mainMenu());

const mainMenu = () => inquirer.prompt([
  {
    type: 'list',
    message: 'Please pick an option',
    name: 'menuChoice',
    choices: ['add engineer','add intern','finish building team'] 
  }])
.then((userInput) => { 

  if (userInput.menuChoice === 'add engineer'){
   console.log('***ADDING ENGINEER***')
   inquirer.prompt([
    {
      type: 'input',
      message: 'enter name',
      name: 'name'
    },
    {
      type: 'input',
      message: 'enter employee ID',
      name: 'ID'
    },
    {
      type: 'input',
      message: 'enter email',
      name: 'email'
    },
    {
      type: 'input',
      message: 'enter github username',
      name: 'github'
    }
  ]).then((answers) => {  fs.appendFile('index.html', engineerTemplate(answers), (err) =>
  err ? console.error(err) : console.log(' ***ENGINEER WAS SAVED***'))
  }).then(()=>mainMenu());};

  if (userInput.menuChoice === 'add intern') {
  console.log('***ADDING AN INTERN***')
  inquirer.prompt([
  {
    type: 'input',
    message: 'enter name',
    name: 'name'
  },
  {
    type: 'input',
    message: 'enter employee ID',
    name: 'ID'
  },
  {
    type: 'input',
    message: 'enter email',
    name: 'email'
  },
  {
    type: 'input',
    message: 'enter github username',
    name: 'github'
  }
]).then((answers) => {  fs.appendFile('index.html', internTemplate(answers), (err) =>
err ? console.error(err) : console.log(' ***INTERN WAS SAVED***'))
}).then(()=>mainMenu());};

  if (userInput.menuChoice === 'finish building team') {
  console.log('Team is finished, you may now view your team on your browser')};

//   console.log(userInput.teammateName)
//   console.log(userInput.teammateEmail)

//   let testHTML = `    <div class="container">
  // <div class="col-sm-6">
  //     <div class="card text-dark text-center bg-light mb-3" style="max-width: 18rem;">
  //         <div class="card-header">Name</div>
  //         <div class="card-body">
  //             <h5 class="card-title">Role</h5>
  //             <ul class="list-group list-group-flush">
  //                 <li class="list-group-item">ID</li>
  //                 <li class="list-group-item">Email</li>
  //                 <li class="list-group-item">Github</li>
  //             </p>
  //         </div>
  //     </div>
  // </div>
// </div>`

  // fs.appendFile('index.html', testHTML, (err) =>
  // err ? console.error(err) : console.log('Success!'))
  

});

init()