// function to generate markdown for README
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
</head>
<body>
    <div class="jumbotron">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button">Action</button>
              <button class="dropdown-item" type="button">Another action</button>
              <button class="dropdown-item" type="button">Something else here</button>
            </div>           
          </div>
          <h1 class="display-4">README.md</h1>
          <hr class="my-4">
      <Title> ${response.Title}</Title>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <hr class="my-4">
        <h2>Description</h2>
        <p>${response.Description}</p>
        <hr class="my-4">
        <h2>Table of contents</h2>
        <p>${response.content}</p>
        <hr class="my-4">
        <h2>Installation</h2>
        <p>${response.Installation}</p>
        <hr class="my-4">
        <h2>Usage</h2>
        <p>${response.Usage}</p>
        <hr class="my-4">
        <h2>License</h2>
        <p>${response.License}</p>
        <hr class="my-4">
        <h2>Credits</h2>
        <p>${response.Credits}</p>
        <hr class="my-4">
        <h2>Test</h2>
        <p>${response.Test}</p>
        <hr class="my-4">
        <h2>Questions</h2>
        <p>${response.Questions}</p>
      </div>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>`;


module.exports = { 
 generateMarkdownTest,


};