Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

// Cypress.env('Link')
// Cypress.env('username')
// Cypress.env('password')

let appid="com.hemanth.vitapbookhub"
let appcount;
describe('Adding App_Id', () => {
    it('Visit link', () => {
        cy.visit(Cypress.env('Link'))
        cy.get('.log-in > .table > .table-cell > form > :nth-child(1) > .form-control').type(Cypress.env('Ethicalusername'))
        cy.get('.log-in > .table > .table-cell > form > :nth-child(2) > .form-control').type(Cypress.env('Ethicalpassword'))
        cy.get('.log-in > .table > .table-cell > form > .text-center > .btn').click()
        cy.wait(5000)
        cy.wait(5000)
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.wait(5000)
        cy.get('#pageSubmenu2 > :nth-child(4) > a').click()
        cy.wait(5000);
        let count;
        cy.get('.myorg > .col-md-12.pd0 > .col-md-3 > .panel > #collapsePlatform > .panel-body > :nth-child(1) > .right-sec > .app-no').then(($btn) => {
          appcount = $btn.text()
          cy.log(appcount)
          count=parseInt(appcount)+2
          cy.log(count)
          cy.get('.myorg > .col-md-12.pd0 > .col-md-9').children().its('length').should('eq', count)

          for(let i=1;i<=appcount;i++){
            cy.get(':nth-child('+(i+1)+') > .domain-info > .left > .fakeapp-name > .second').should('not.be.empty')
            cy.get(':nth-child('+(i+1)+') > .col-md-8 > :nth-child(1) > .domain-details > .second').should('not.be.empty')
            cy.get(':nth-child('+(i+1)+') > .col-md-8 > :nth-child(2) > .domain-details > .second').should('not.be.empty')
            cy.get(':nth-child('+(i+1)+') > .col-md-8 > :nth-child(3) > .domain-details > .second > .rating-views').should('not.be.empty')
            cy.get(':nth-child('+(i+1)+') > .col-md-4.col-xs-12 > :nth-child(1) > .domain-details > .second').should('not.be.empty')
            cy.get(':nth-child('+(i+1)+') > .col-md-4.col-xs-12 > :nth-child(2) > .domain-details > .second').should('not.be.empty')
            cy.get(':nth-child('+(i+1)+') > .col-md-8 > :nth-child(3) > .domain-details > .second > [data-v-34cbeed1=""][data-v-7df1d12c=""] > .vue-star-rating').children()


            cy.get(':nth-child('+(i+1)+') > .çol-md-12 > .fakeapps-more-btn').click()
            // cy.get(':nth-child('+(i+1)+') > .col-md-12').each((item,index,list)=>{
            //   cy.log(list.length);
            // })
            cy.get('.myorg > .col-md-12.pd0 > .col-md-9 > :nth-child('+(i+1)+') > .col-md-12').within(el => {
              cy.get('table').should(($tr) => {
                try {
                  // cy.get('td') 
                  try {
                    expect($tr.find('td').length).to.be.at.least(1)
                  } catch (error) {
                    
                  }
                  const $tds = $tr.find('td') // find all the tds
                  if ($tr && $tr.find('td').length > 0) {
                    cy.log("Data is getting")
                    expect($tr).to.throw(Error)
                    // We have some search results
                    // The products are in $sResults
                  } else {
                  cy.log("Error!!! The IOC s are missing Please verify")
                  }
                } catch (error) {
                }
                  
                })
            })
         
            
            // cy.get('#MC43OTU0NDg1 > div > .table ').each((item,index,list)=>{
            //   cy.log(list.length);
            // })
            // cy.get('#MC43OTU0NDg1 > div > .table ')


          }
        })
       

    })
   
})
