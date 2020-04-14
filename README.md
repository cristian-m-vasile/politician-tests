# politician-tests

Set of UI tests for the politician form. I have used Cypress as the automation tool for this. Used with a macOS device, but installation steps should be the same for any unix system.

## Requirements
* node, npm
* chrome browser (not needed for default headless execution)
* unix system (might work without problems in Windows, but haven't tried)

## Setup
```
npm install
npm test
```

## Execution
As written above, to execute the tests simply write `npm test`.   
Test results are printed directly to console.   
For screenshots of the failures please go to `cypress/screenshots/`   
For videos of the execution please go to `cypress/videos/`   

### More ways to execute tests
* If you would like to delve deeper into the tests, please run `npx cypress open`
* By default cypress runs headless, to run it in headed Chrome you can use `npx cypress run --browser chrome`
* For more info on how to run cypress, including how to run it in other browsers, please visit https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers

## Choices
* I chose to use Cypress, which is a great new tool for UI tests, it is quickly gaining groud on Selenium as the weapon of choice for most SDETs
* It has great debugging tools when you use `npx cypress open`
* By default it will run tests in chrome, but you could also use microsoft edge or firefox with minimal changes to the code
* I chose not to use the page object model, as per Cypress' recommendation: https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/

## Bugs
A few bugs have been reported as test failures, however here are some more that would normally merit a discussion between the SDET / QA and the Developer / Product Owner / Designer
* A field is called 'Year of birth', but shows the whole date
* 'Year of birth' field doesn't have id, makes it hard to write stable automated tests
* 'Save' button similarly doesn't have id
* 'Position' field has hidden input for no aparent reason
* There are only data validation messages (feedback) on url field, should be on all
* The technical test's description metioned date of birth is in mm/dd/yyyy format, but in the form it is in dd/mm/yyyy format
