Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

// Cypress.env('Link')
// Cypress.env('username')
// Cypress.env('password')

let appid="com.hemanth.vitapbookhub"
describe('Adding App_Id', () => {
    it('Visit link', () => {
        cy.visit(Cypress.env('Link'));
        cy.get('.log-in > .table > .table-cell > form > :nth-child(1) > .form-control').type(Cypress.env('Ethicalusername'))
        cy.get('.log-in > .table > .table-cell > form > :nth-child(2) > .form-control').type(Cypress.env('Ethicalpassword'))
        cy.get('.log-in > .table > .table-cell > form > .text-center > .btn').click()
        cy.wait(5000)
    })
    it("visit Asset Manager",()=>{
        try {
            cy.get('#AssetManager > a').click()
        } catch (error) {
            cy.wait(5000)
            cy.get('#AssetManager > a').click()
        }
        try {
            cy.get('.log-in > .table > .table-cell > form > :nth-child(1) > .form-control').type(Cypress.env('Ethicalusername'))
            cy.get('.log-in > .table > .table-cell > form > :nth-child(2) > .form-control').type(Cypress.env('Ethicalpassword'))
            cy.get('.log-in > .table > .table-cell > form > .text-center > .btn').click()
        } catch (error) {
            
        }
        cy.wait(5000)
        try {
            cy.get('#AssetManager > a').click()
        } catch (error) {
            cy.wait(5000)
            cy.get('#AssetManager > a').click()
        }
        cy.wait(5000)
    })
    it('Navigate to Mobile apps', () => {
        cy.get('#mobile_app_tab').click()
        cy.get('#mobapps > :nth-child(1) > :nth-child(1) > .add-asset-btn > .btn').click()
        cy.wait(2000)
        cy.get('#rb-email').click()
        cy.get('#appModal > .modal-dialog > .modal-content > .modal-body > .email > .form-group > .form-control').type(appid).should("have.value","com.hemanth.vitapbookhub")
        cy.get('#appModal > .modal-dialog > .modal-content > .modal-footer > #appSubmit').click()
        try {
            
        } catch (error) {
            cy.get('.log-in > .table > .table-cell > form > :nth-child(1) > .form-control').type(Cypress.env('Ethicalusername'))
            cy.get('.log-in > .table > .table-cell > form > :nth-child(2) > .form-control').type(Cypress.env('Ethicalpassword'))
            cy.get('.log-in > .table > .table-cell > form > .text-center > .btn').click()
        }
        
        cy.get('.phishing-wrapper > .content-main > .mobapp-content-main > :nth-child(2) > .something > .mb0').contains(appid)
    });
})
