
// node modules
//================================================================
const inquirer = require("inquirer");
const fs = require("fs");

// question section
// ===============================================================
const questions = [
  {
    type: "input",
    name: "filename",
    message: "How would you like your file to be called?",
  },
  {
    type: "input",
    name: "title",
    message: "What is Your Project title?",
  },
  {
    type: "input",
    name: "description",
    message: "explain about your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation process?",
  },
  {
    type: "input",
    name: "usage",
    message: "How will this project be used?",
  },
  {
    type: "list",
    name: "licenses",
    message: "What licenses are required with this project?",
    choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Boost Software License 1.0','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense'],
  },
  {
    type: "input",
    name: "contribute",
    message: "Who were the contributors to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What is the test process for this project?",
  },
  {
    type: "input",
    name: "github",
    message: "enter your GitHub URL.",
    
  },
  {
    type: "input",
    name: "email",
    message: "enter your email address.",
  },
];

// prompt section
// ===============================================================
inquirer.prompt(questions).then((answers) => {
  
    // readme template
    // ========================================
  const template = 
   `# ${answers.title}

   # Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licenses](#license)
- [Contribute](#contribute)
- [Test](#test)
- [GitHub](#github)
- [Email](#email) 

    ## Description: 
    ${answers.description}

    ## Installation:
    ${answers.installation}

    ## Usage:
    ${answers.usage}

    ## License:
    ${answers.licenses}

    ## Contribute:
    ${answers.contribute}

    ## Test:
    ${answers.test}

    ## GitHub:
    ${answers.github}
   

    ## Email:
    ${answers.email}
   
    `;

 // fs.writefile to generate a new readme file 
 // ===========================================
  let fileName = `${answers.filename}.md`;

  fs.writeFile(fileName, template,(err) => {
    err ? console.log(err) : console.log("Your readme has been generated");
  });
});



    
  