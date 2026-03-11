// importing the test module from playwright
const {test} = require('@playwright/test');


// Creating a test case Syntax:
test('Test case Name', function()
{
    // Test Steps: Playwright code to perform the test steps
});


// Before every teststep, We have to Use "await" keyword to wait 
// for the step to complete before moving to the next step. 
// Otherwise, it will execute the next step without 
// waiting for the previous step to complete and 
// it may cause an error in the test execution.

// And "await" keyword can only be used inside an "async" function.
test('First Playwright Test', async function()
{
    // await  

} )

// We can also define a function with "()=>" operator

test('Playwright test', async ()=>
{

});