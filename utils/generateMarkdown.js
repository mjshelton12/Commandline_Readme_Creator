// Renders License Badge under App Title if user selects a license
function renderLicenseBadge(license) {
  if (license === "No License") {
    return " ";
  }

  const lic = license
  const betterLic = lic.split(' ').join('_')

  return `![license](https://img.shields.io/badge/LICENSE-${betterLic}-GREEN)
  `
}

// Renders license link in Table of Contents if user selects a license
function renderLicenseLink(license) {
  if (license === "No License") {
    return " ";
  }
  return `
  - [License](#License)`
}

// Renders license header and information if user selects a license
function renderLicenseSection(license) {
  if (license === "No License") {
    return " ";
  }

  return `## License
  
  This project is licensed under the ${license} license.

  `
}

// Generates a markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#Description) ${renderLicenseLink(data.license)}
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Description

  ${data.description}

  ${renderLicenseSection(data.license)}

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

  [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
