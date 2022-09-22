const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')



//Team cards 
//Manager card
const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-body"
                <h3 class="card-title>${manager.name}</h3>
                <h4 class="card-title>Manager</h4>
                <div class="card-text">
                    <p class="id">ID:${manager.id}</p>
                    <p class="office-number">Office Number:${manager.officeNumber}
                    <a href="mailto:${manager.email}" class="btn btn-primary">${manager.email}</a>
                </div>
            </div>
        </div>
    </div>`
}

//Intern card
const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-body"
                <h3 class="card-title>${intern.internName}</h3>
                <h4 class="card-title>Intern</h4>
                <div class="card-text">
                    <p class="id">ID:${intern.internId}</p>
                    <p class="school">School:${intern.internSchool}
                    <a href="mailto:${intern.internEmail}" class="btn btn-primary">${intern.internEmail}</a>
                </div>
            </div>
        </div>
    </div>`
}

//Engineer card
const generateEngineer = function(engineer) {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-body"
                <h3 class="card-title>${engineer.engineerName}</h3>
                <h4 class="card-title>Engineer</h4>
                <div class="card-text">
                    <p class="id">ID:${engineer.engineerId}</p>
                    <a href="mailto:${engineer.engineerEmail}" class="btn btn-primary">${engineer.engineerEmail}</a>
                    <a href="https://github.com/${engineer.engineerGithub}" class="btn btn-primary">${engineer.engineerGithub}</a>
                </div>
            </div>
        </div>
    </div>`
}



generateHTML = (data) => {
    console.log('inside generate html' + data)

    let pageArray = [];

    for(let i = 0; i < data.length; i++) {
        console.log(data[i])
        const employee = data[i];
        const role = employee.getRole();
        if(role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard)
        }

        if(role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard)
        }

        if(role === 'Intern') {
            const internCard = generateIntern(employee)
            pageArray.push(internCard)
        }
    }
    let teamCards = pageArray.join('');
    generatePage(teamCards);
    console.log('inside generateHTML' + teamCards)
}

const generatePage = (teamCards) => {  
    console.log(teamCards)     
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${teamCards}
    
</body>
</html>`
}

module.exports = generateHTML;