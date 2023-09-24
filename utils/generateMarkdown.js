// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license !== 'None') {
    case 'None':
      return '![GitHub license](https://img.shields.io/badge/license-${license-blue.svg)';
  }
  return '';
}
//
// TODO: Create a function that returns the license link
// If there is no license returns an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return licenseURLs[license]};
    {
      return '';
    }
}
//
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    const licenseSection = `
    
    ## License
    
    This project is licensed under [${license} License](${renderLicenseLink(license)}).
    `;
    return licenseSection;

  }
  return '';
//
}
//Brings response from the previous response 
function renderLicenseLink(license) {

}
//
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}
* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests :
\`\`\`
${data.test}
\`\`\`

# Questions

If you have any concerns about this repo, contact me at ${
  data.email
}, To see more of my work please go to my GitHub profile here [${data.github}](https://github.com/JohnnyC7212?tab=repositories/${
  data.github
}/).

`;
}
//
module.exports = generateMarkdown;
