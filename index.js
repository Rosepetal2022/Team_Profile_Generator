//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Create array of questions for user input

const managerQuestions = [
    {
        type: 'input',
        name: 'manager_name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input', 
        name: 'employee_id',
        message: 'What is the employee ID?'
    },
    {
        type: 'input',
        name: 'email_address',
        message: "What is the team manager's email address?"
    },
    {
        type: 'input',
        name: 'office_number',
        message: "What is the team manager's office number?"
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer_name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'engineer_Id',
        message: "What is the engineer's employee Id?"
    },
    {
        type: 'input',
        name: 'engineer_email',
        message: "What is the engineer's email address?"
    },
    {
        type: 'input',
        name: 'engineer_github',
        message: "What is the engineer's GitHub username?"
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'intern_name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'intern_id',
        message: "What is the intern's employee ID?"
    },
    {
        type: 'input',
        name: 'intern_email',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'intern_school',
        message: "What school is the intern attending?"
    },
];