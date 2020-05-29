function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## table of contents

* [installation](#installation)
* [github](#github)
* [email](#email)
* [license](#license)
* [test](#test)
* [usage](#usage)
* [contribution](#contribution)
* [questions](#questions)

## installation

## github 

## email

## license

## test

## usage

##contribution

## questions 
if you have any questions, contact my email. 



`;

}

module.exports = generateMarkdown;


// include a badge specific to the repository
// couldnt figure out how to do this part. 