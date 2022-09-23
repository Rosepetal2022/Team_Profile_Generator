//require the node dependencies 
const inquirer = require('inquirer');
const fs = require('fs');

//variables to require files
const generateHTML = require('./src/pageTemplate')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



//use this array to push all the data from the prompt questions
let teamArray = [];

//Start the app by asking for the manager info
const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please provide the Manager's name.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Managers name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID number?",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log("Please enter a valid number!");
                } else if (!idInput) {
                    console.log('Please enter an ID number!');
                    return false;
                } else {
                    return true;
                }
            }  
        },
        {
            type: 'input', 
            name: 'email',
            message: "What is the manager's email?",
            validate: emailInput => {
                if(emailInput.includes('@')) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeNumberInput => {
                if(isNaN(officeNumberInput)) {
                console.log("Please enter a valid number!");
            } else if (!officeNumberInput) {
                console.log('Please enter an Office Number number!');
                return false;
            } else {
                return true;
            }
        }  
        },
    ])
    .then(managerInput => {
        const{ name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
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
                writeToFile(teamArray.toString());
            
        }
    })
}

//engineer questions 
const engineerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: engineerNameInput => {
                if(engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'engineerId',
            message: "What is the engineer's Id number?",
            validate: engineerIdInput => {
                if(isNaN(engineerIdInput)) {
                    console.log("Please enter a valid number!");
                } else if (!engineerIdInput) {
                    console.log('Please enter an ID number!');
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?",
            validate: engineerEmailInput => {
                if(engineerEmailInput.includes('@')) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github username?",
            validate: engineerGithubInput => {
                if(engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's Github username!");
                    return false;
                }
            }
        },  
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        team();
    })
}

//intern questions
const internQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?",
            validate: internNameInput => {
                if(internNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id number?",
            validate: internIdInput => {
                if(isNaN(internIdInput)) {
                    console.log("Please enter a valid number!");
                } else if (!internIdInput) {
                    console.log('Please enter an ID number!');
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?",
            validate: internEmailInput => {
                if(internEmailInput.includes('@')) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school is the intern attending?",
            validate: internSchoolInput => {
                if(internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        },

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        team();
    });
}

//write file function to send the data to the template page to create the index.html
const writeToFile = () => {
    const employeeProfiles = generateHTML(teamArray)
    fs.writeFile("./dist/index.html", employeeProfiles, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('Page was succesfully created!')
        }
    })
};

//calling the manager questions to start the app
managerQuestions()
    