const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
//const generateMarkdownTest = require("./utils/generateMarkdown");
const { log } = require("console");
const emailValidator = require('email-validator');

//function of my html file
 const generateMarkdownTest = (response) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Readme</title>
        <style>
    html {
        scroll-behavior: smooth;
    }
    
        </style>
    </head>
    <body>
        <div class="jumbotron" style="background-color: #031325; border: 2px solid black; color: white;" >
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  =
                </button>
                <hr class="my-4"> 
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div id="title1">
                  <a class="dropdown-item" type="button" href="#title2">${response.Title}</a>
                </div>
                <div id="Description1">
                  <a class="dropdown-item" type="button" href="#Description2">Description</a>
                </div>
                <div id="contents1">
                  <a class="dropdown-item" type="button" href="#contents2">Table of contents</a>
                </div>
                <div id="Installation1">
                  <a class="dropdown-item" type="button" href="#Installation2">Installation</a>
                </div>
                <div id="Usage1">
                  <a class="dropdown-item" type="button" href="#Usage2">Usage</a>
                </div>
                <div id="License1">
                  <a class="dropdown-item" type="button" href="#License2">License</a>
                </div>
                <div id="Credits1">
                  <a class="dropdown-item" type="button" href="#Credits2">Credits</a>
                </div>
                  <div id="test1">
                  <a class="dropdown-item" type="button" href="#test2">Test</a>
                </div>
                <div id="questions1">
                    <a class="dropdown-item" type="button" href="#question2">Questions</a>
                  </div>
                </div>           
              </div>
              <!-- <h1 class="display-4">README.md</h1>
              <hr class="my-4"> -->
              <div id="title2">
          <h1>${response.Title}</h1>
            <hr class="my-4">
              </div>
              <div id="Description2">
            <h2>Description</h2>
            <p>${response.Description}</p>
        </div>
        <div id="contents2">
            <hr class="my-4">
            <h2>Table of contents</h2>
            <p>${response.content}</p>
            <hr class="my-4">
        </div>
        <div id="Installation2">
            <h2>Installation</h2>
            <p>${response.Installation}</p>
            <hr class="my-4">
        </div>
        <div id="Usage2">
            <h2>Usage</h2>
            <p>${response.Usage}</p>
        </div>
        <div id="License2">
            <hr class="my-4">
            <h2>License</h2>
            <p>${response.License}</p>
        </div>
        <div id="Credits2">
            <hr class="my-4">
            <h2>Credits</h2>
            <p>${response.Credits}</p>
        </div>
        <div id="test2">
            <hr class="my-4">
            <h2>Test</h2>
            <p>${response.Test}</p>
        </div>
            <hr class="my-4">
        <div id="question2">
            <h2 >Questions</h2>
            <p>${response.Questions}</p>
            <a href="https://github.com/${response.Github}">${response.Github}</a>
            <p>${response.Email}</p>
        </div>
          </div>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>`;
  



// object of questions for user
// const questions = () => 
inquirer.prompt ([ 
    {
        type: 'input',
        message: 'Whats the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Whats the project description?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Whats the table of content?',
        name: 'Table of contents',
    },
    {
        type: 'input',
        message: 'How to install and run project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How is the project is used?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What are the license used for this project?',
        name: 'License',
        
    },
    {
        type: 'input',
        message: 'Who did you work on this project with?',
        name: 'Credits',
    },
    {
        type: 'input',
        message: 'Test for the project?',
        name: 'Test',
    },
    {
        type: 'input',
        message: 'Any questions?',
        name: 'Questions',

    },
    {
        type: 'input',
        message: 'GitHub Username',
        name: 'Github',



    },
    {
        type: 'input',
        message: 'Email Address',
        name: 'Email',
        validate: function(email)
        {
            // variable that contains email validation code
            valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
// conditions for results
            if (valid) {
                console.log(" valid");
                return true;
            } else {
                console.log(" invalid");
                return false
            }
        }

    },

])
.then((response) => {
    
    console.log(response);

    const HTMLtest = generateMarkdownTest(response);
//using fs to makr html file and conditions if successful or not
    fs.writeFile(`index.html`, HTMLtest, (error) =>
    error ? console.error(error) : console.log("well done!")
    );

});

//inquirer.prompt.Questions 
 


// function to write README file
//function writeToFile(fileName, data) {
//const ReadMeHTML = (Response) => 

//}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
