before(() =>
{
//Use the baseUrl from cypress.json
    cy.visit('/');
})

/*
This piece of code test 
a. Click on Intersect - Learn More link.
b. Scroll down to the map
c. Click on a state - Assert the corresponding tooltip.
d. Click on logically grouped states - Assert the corresponding tooltip
-SK
*/


describe('CypressTestAutomation' , function()
{  
it('4_Verify_Tooltip', function()
{
    var tooltip
    cy.get('[href="https://www.hobsons.com/solution/intersect/"] > .card-home-banner__lower > .card-home-banner__button')
      .click()
     cy.get('.block-stats-map [data-popup-content] [data-state="MN"]')
    // .invoke('attr', 'fill')
    // .should('equal','#141497')
      .click()
    cy.get('.block-stats-map [data-popup-content] [data-popup-content]')
      .should('have-text' , '50% of Students')
      .eql('50% of Students')
    
})
})
