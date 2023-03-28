// Function renders license badges if the user has chosen Apache, MIT, or Unilicense.  If any other license or no license is entered then a blank is returned.
function renderBadge(license) {
  if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    return;
  }
};

//Function to render the license link; if no license is selected then a blank is returned.
function renderLink(license) {
  if (license == "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
} else if (license == "MIT") {
  return `https://opensource.org/licenses/MIT`;
}  else if (license == "Unlicense") {
    return `http://unlicense.org/`;
  } else {
    return;
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty 
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderBadge(answers.license)}
  # Table of Contents
  1. [Description] (#description)
  2. [Installation] (#installation)
  3. [Usage] (#usage)
  4. [Credits] (#credits)
  5. [License] (#license)
  6. [Username] (#username)
  ## Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Credits
  ${answers.credits}
  ## License
  [${answers.license}](${renderLink(answers.license)})
`;
}
// function to export to main index.js file
module.exports = generateMarkdown;
