// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "no license") {
    return " ";
  }

  return `## License
  
  This project is licensed under the ${license} license.

  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  ## Description
  
  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have additional questions regarding this app, you can reach out to the author through their github or email:

  [${data.github}'s Github Profile](http://www.github.com/${data.github})

  ${data.email}

`;
}

module.exports = generateMarkdown;
