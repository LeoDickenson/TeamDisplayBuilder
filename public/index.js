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

  let testHTML = `    <div class="container">
  <div class="col-sm-6">
      <div class="card text-dark text-center bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header">Name</div>
          <div class="card-body">
              <h5 class="card-title">Role</h5>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Email</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
              </p>
          </div>
      </div>
  </div>
</div>`

  fs.appendFile('index.html', testHTML, (err) =>
  err ? console.error(err) : console.log('Success!'))

});
