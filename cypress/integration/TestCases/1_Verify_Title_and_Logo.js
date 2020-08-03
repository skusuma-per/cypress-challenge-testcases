//Use the baseUrl from cypress.json
before(() =>
{
    cy.visit('/');
})
/*
This test covers 
a. Opening the application using the before hook
b. Verify the title of the home page
c. Verify that logo is displayed
 - SK
*/


describe('CypressTestAutomation' , function()
{  
it('1_Verify_Title_and_Logo', function()
{
    cy.title()
      .should('eq' , 'Education Advances | Hobsons');
     cy.get('.site-header__logo')
       .should('be.visible');
})
})