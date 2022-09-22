const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/pageTemplate')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const pageTemplate = require('./src/pageTemplate');


//use this array to push all the data from the prompt questions
let teamArray = [];

//Start the app by asking for the manager info
const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please provide the manager's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?"   
        },
        {
            type: 'input', 
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then(managerInput => {
        const{ name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
        console.log(teamArray);
        team()
    })
};

//After the manager puts in the info, then ask what other employees they would like to add
const team = () => {
    return inquirer.prompt (
        {
            type: 'list',
            name: 'teamMembers',
            message: 'What employees would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'Manager', 'No other employees']
        },

    //Using a switch statement to take user to the questions for the type of employee they want to add
    ).then(function(userInput) {
        switch(userInput.teamMembers) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            case 'Manager':
                managerQuestions();
                break;
            default:
                writeToFile();
            
        }
    })
}

const engineerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input', 
            name: 'engineerId',
            message: "What is the engineer's Id number?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github username?"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        team();
    })
}

const internQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id number?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school is the intern attending?"
        },

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internid, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        team();
    });
}

const writeToFile = () => {
    console.log(teamArray)
    const employeeProfiles = generateHTML(teamArray)
    console.log('inside write to file' + employeeProfiles)
    fs.writeFile("./dist/index.html", employeeProfiles, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('Page was succesfully created!')
        }
    })
};

managerQuestions()
    