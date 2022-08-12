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
  - [License](#license)`
}

// Renders license header and information if user selects a license
function renderLicenseSection(license) {
  if (license === "No License") {
    return " ";
  }

  return `
  ## License <a id="license"></a>
  
  This project is licensed under the ${license} license.

  `
}

// Generates a markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Technologies Used](#tech) ${renderLicenseLink(data.license)}
  - [Installation](#install)
  - [Usage](#use)
  - [Live Site](#site)
  - [Overview of Site](#overview)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Summary](#summary)
  - [Questions](#author)
  
  ## Description <a id="description"></a>

  ${data.description}

  ## Technologies Used <a id="tech"></a>

  ${data.technologies}
  ${renderLicenseSection(data.license)}
  ## Installation <a id="install"></a>

  ${data.installation}

  ## Usage <a id="use"></a>

  ${data.usage}

  ## Live Site <a id="site"></a>

  [Live Application](${data.link})

  ## Overview of Site <a id="overview"></a>

  ![Overview Photo of Application](${data.photo})

  ## Contributing <a id="contributing"></a>

  ${data.contributing}

  ## Tests <a id="tests"></a>

  ${data.tests}

  ## Summary <a id="summary"></a>

  ${data.summary}

  ## Questions <a id="author"></a>

  If you have additional questions regarding this app, you can reach out to the author through their github or email:

  [${data.github}'s Github Profile](http://www.github.com/${data.github})

  [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
