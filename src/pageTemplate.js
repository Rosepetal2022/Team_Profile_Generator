const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')



//Team cards 
//Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card" style="width: 16rem;">
            <h2 class="card-header bg-secondary text-white text-center">${manager.name}</h3>
            <div class="card-body">
                <h5 class="card-subtitle mb-2 text-muted">Manager</h5>
                <i class="material-icons" style="font-size:48px;">pending_actions</i>
                <ul class="list-group list-group-flush">
                    <li class="id list-group-item">ID: ${manager.id}</li>
                    <li class="office-number list-group-item">Office Number:${manager.officeNumber}</li>
                    <a href="mailto:${manager.email}" class="btn btn-primary" id="managerBtn">Email: ${manager.email}</a>
                </ul>
            </div>
        </div>
    </div>`
};

//Intern card
const generateIntern = function (intern) {
    return `
        <div class="col-4 mt-4">
        <div class="card" style="width: 16rem;">
            <h2 class="card-header bg-secondary text-white text-center">${intern.name}</h3>
            <div class="card-body">
                <h5 class="card-subtitle mb-2 text-muted">Intern</h5>
                <i class="material-icons" style="font-size:48px;">badge</i>
                <ul class="list-group list-group-flush">
                    <li class="id list-group-item">ID: ${intern.id}</li>
                    <li class="school list-group-item">School: ${intern.school}</li>
                    <a href="mailto:${intern.email}" class="btn btn-primary" id="internBtn">Email: ${intern.email}</a>
                </ul>
            </div>
        </div>
    </div>
    `
};

//Engineer card
const generateEngineer = function (engineer) {
    return `
       <div class="col-4 mt-4">
        <div class="card" style="width: 16rem;">
            <h2 class="card-header bg-secondary text-white text-center">${engineer.name}</h3>
            <div class="card-body">
                <h5 class="card-subtitle mb-2 text-muted">Engineer</h5>
                <i class="material-icons" style="font-size:48px;">diamond</i>
                <ul class="list-group list-group-flush">
                    <li class="id list-group-item">ID: ${engineer.id}</li>
                    <a href="https://github.com/${engineer.github}" class="btn btn-primary mb-2" id="engineerGithub"> Github ${engineer.github}</a>
                    <a href="mailto:${engineer.email}" class="btn btn-primary" id="engineerBtn">Email: ${engineer.email}</a>
                </ul>
            </div>
        </div>
    </div>
    `
};


//function that recieves the data from index.js
//pushes the info to each html card to be created
generateHTML = (data) => {
    let pageArray = [];

    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        const role = employee.role
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard)
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard)
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee)
            pageArray.push(internCard)
        }
    }
    let teamCards = pageArray.join('');
    generatePage(teamCards);
    return generatePage(teamCards);
}

//boiler plate html template 
const generatePage = (teamCards) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>Team Profile</title>
</head>
    <header>
        <nav class="navbar navbar-dark bg-dark py-5" id="navbar">
            <h1 class="text-center h1 display-3 text-light" id="navbar-text">Team Profile</h1>
        </nav>
    </header>
<body>
<div class="container">
    <div class="row justify-content-center">
        ${teamCards}
    </div>
</div>
    
</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</html>
`
}

module.exports = generateHTML;