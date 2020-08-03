before(() =>
{
//Use the baseUrl from cypress.json
    cy.visit('/');
})


/*
This test covers 
a. Opening the application using the before hook
b. Verify the Hero graphic text
c. Select tthe "Intersect" application card
d. Click on "Learn More" link
 - SK
*/

describe('CypressTestAutomation' , function()
{  

it('2_Click_On_INTERSECT_Link', function()
{
    cy.get('.banner-home__title')
      .should('be.visible')  
    cy.get('[href="https://www.hobsons.com/solution/intersect/"] > .card-home-banner__lower > .card-home-banner__button')
      .click()
   
})
})
