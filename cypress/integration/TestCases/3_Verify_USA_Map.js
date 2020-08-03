before(() =>
{
//Use the baseUrl from cypress.json
    cy.visit('/');
})

/*
This test covers 
a. Click on Intersect - Learn More link.
b. Scroll down to “The Growing Naviance Footprint”.
c. Verify the map of the United States is displayed.
-SK
*/
describe('CypressTestAutomation' , function()
{  
it('3_Verify_USA_Map', function()
{
    cy.get('[href="https://www.hobsons.com/solution/intersect/"] > .card-home-banner__lower > .card-home-banner__button')
      .click()
    cy.get('h2')
      .contains('The Growing Naviance Footprint')
      .should('be.visible')
   cy.get('.block-stats-map__map')
     .should('be.visible')
})
})