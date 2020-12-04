const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const teamMemberArray = [];
const idArray = [];

//Creating the managers

function app(){
function makeManager(){
    console.log("Please Build Your TEAM")
inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character";
        }
      },
      {
        type: "input",
        name: "managerID",
        message: "Please enter manager ID",
        validate: answer => {
            const pass = answer.match(/^[1-9]\d*$/)
          if (pass) {
            return true;
        }
        return "Please enter only number";
      }
    },
      {
        type: "input",
        name: "managerEmail",
        message: "What's the manager Email?",
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/)
            if (pass) {
              return true;
          }
          return "Please enter a valid email address";
        }
      },
      {
        type: "input",
        name: "managerPhone",
        message: "What is the manager office number?",
        validate: answer => {
            const pass = answer.match(/^[1-9]\d*$/)
            if (pass) {
              return true;
          }
          return "Please enter a valid email address";
        }
      }
]).then(responses => {
    const manager = new Manager(reponses.managerName, responses.managerID, responses.managerEmail, responses.managerPhone )
    teamMemberArray.push(manager)
    idArray.push(responses.managerID)
    createTeam()
})

}
function createTeam(){
    inquirer.prompt([{
        type: "list",
        name: "UserChoice",
        message: "What type of team member do you want to add?",
        choices: [
            "engineer",
            "intern",
            "I dont want to add anymore"
        ]
    }]).then(choice => {
        switch(choice.UserChoice){
            case "engineer": 
            addEngineer()
            break;
            case "intern":
            addIntern()
            break;
            default:
            buildTeam()
        }
    })
}

function buildTeam(){
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMemberArray), "utf-8")
}

//creating the engineers
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the engineer?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character";
            }
          },
          {
            type: "input",
            name: "engineerID",
            message: "Please enter engineer ID",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/)
              if (pass) {
                return true;
            }
            return "Please enter only number";
          }
        },
          {
            type: "input",
            name: "engineerEmail",
            message: "What's the manager Email?",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/)
                if (pass) {
                  return true;
              }
              return "Please enter a valid email address";
            }
          },
          {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer GitHub page?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Please enter at least one character";
              }
          }
    ]).then(responses => {
        const engineer = new Engineer(reponses.engineerName, responses.engineerID, responses.engineerEmail, responses.engineerPhone )
        teamMemberArray.push(engineer)
        idArray.push(responses.engineerID)
        createTeam()
})}

//Intern

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the intern?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character";
            }
          },
          {
            type: "input",
            name: "internID",
            message: "Please enter intern ID",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/)
              if (pass) {
                return true;
            }
            return "Please enter only number";
          }
        },
          {
            type: "input",
            name: "internEmail",
            message: "What's the intern Email?",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/)
                if (pass) {
                  return true;
              }
              return "Please enter a valid email address";
            }
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is the manager office number?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Please enter at least one character";
              }
          }
    ]).then(responses => {
        const intern = new Engineer(reponses.managerName, responses.managerID, responses.managerEmail, responses.managerPhone )
        teamMemberArray.push(manager)
        idArray.push(responses.managerID)
        createTeam()
})}


makeManager()
}

app();