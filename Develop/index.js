const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const markdown = require("./utils/generateMarkdown.js");

function init() {

    inquirer.prompt([

   {
      message: " what is your github username?",
      type: "input",
      name: "github"
   },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },

    {
        type:"input",
        name:"title",
        message: "what is your project title?"

    },

    {
        type:"input",
        name:"description",
        message:"describe your project"

    },

    {
        type:"input",
        name:"license",
        message:"what type of license does your project have?",
        default: "none"
    },

    {
        type:"input",
        name:"installation",
        message: "what is the command that should be run to install dependencies?",
        default:"npm install"
    },
    {
        type:"input",
        name:"test",
        message:"what command should you run to run the test?",
        default: "npm run test"
    },
    {
        type:"input",
        name:"usage",
        message:"what does the user need to know about this project?"
    },
    {
        type:"input",
        name:"contributing",
        message:"what does the user need to know about contributing to this project?"
    }

    ]).then(responses => {
   //console.log(responses) ;
   writeToFile("README.md", markdown(responses));
})};


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}




init();