const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const teamarray = [];

createManager();
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "Id",
        message: "What is the Manager's Id?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is the Manager's email?",
      },
      {
        type: "input",
        name: "Officenumber",
        message: "What is the Manager's office number?",
      },
    ])
    .then((response) => {
      let manager = new Manager(
        response.name,
        response.Id,
        response.Email,
        response.Officenumber
      );
      teamarray.push(manager);
      console.log(teamarray);
      navigation();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "Id",
        message: "What is the Engineer's Id?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is the Engineer's email?",
      },
      {
        type: "input",
        name: "Github",
        message: "What is the Engineer's github?",
      },
    ])
    .then((response) => {
      let engineer = new Engineer(
        response.name,
        response.Id,
        response.Email,
        response.Github
      );
      teamarray.push(engineer);
      console.log(teamarray);
      navigation();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "Id",
        message: "What is the Intern's Id?",
      },
      {
        type: "input",
        name: "Email",
        message: "What is the Intern's email?",
      },
      {
        type: "input",
        name: "School",
        message: "What is the Intern's school?",
      },
    ])
    .then((response) => {
      let intern = new Intern(
        response.name,
        response.Id,
        response.Email,
        response.School
      );
      teamarray.push(intern);
      console.log(teamarray);
      navigation();
    });
}

function navigation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addmember",
        message: "What team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "none"],
      },
    ])
    .then((response) => {
      if (response.addmember === "Manager") {
        createManager();
      } else if (response.addmember === "Engineer") {
        createEngineer();
      } else if (response.addmember === "Intern") {
        createIntern();
      } else {
        console.log("Ya");
      }
    });
}
