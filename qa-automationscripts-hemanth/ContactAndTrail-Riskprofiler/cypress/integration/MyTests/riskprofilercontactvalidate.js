Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Verifying the website with wrong attempts', () => {
    const url='https://staging-site-crp-4470.riskprofiler.io/';
    const name='Hemanth Chowdary'
    const mail='hemanth.chowdary@ethicalhat.com'
    const mailwithoutdomain='hemanth.chowdary'
    // it('See RiskProfiler In Action with wrong input', () => {
    //     cy.visit(url)
    //     // Checking title of the page so that we can confirm we are in coorect page
    //     cy.title().should('eq','Risk Profiler')
    //     cy.get('.trial-input-wrapper > input[type=text]').type(mailwithoutdomain).should('have.value',mailwithoutdomain)
    //     cy.get(".trial-input-wrapper > .btn").click()
    //     cy.on('window:alert',(txt)=>{
    //         //Mocha assertions
    //         expect(txt).to.contains('Enter a valid email address');
    //         cy.log("Handled the alert")
    //      })
    //     cy.get('.trial-input-wrapper > input[type=text]').clear()
    //     cy.get(".trial-input-wrapper > .btn").click()
    //     cy.on('window:alert',(txt)=>{
    //         //Mocha assertions
    //         expect(txt).to.contains('Enter a valid email address');
    //         cy.log("Handled the alert")
    //      })
    //      cy.get('.trial-input-wrapper > input[type=text]').clear()
    //      cy.get('.trial-input-wrapper > input[type=text]').type(mail)
    //      cy.get(".trial-input-wrapper > .btn").click()

    // });
    // it('Checking contact page', () => {
    //     cy.visit(url+'contact')

    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#errorToast").then($error => {
    //         if ($error.is(':visible')){
    //             cy.log($error).get('#errorToast').should('have.text', '\n          Please accept T&C and privacy policy\n        ').should('be.visible');
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    //     cy.get('#first_name').type('Hemanth').should('have.value','Hemanth')
    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#errorToast").then($error => {
    //         if ($error.is(':visible')){
    //             cy.get('#errorToast').should('have.text', '\n          Please accept T&C and privacy policy\n        ').should('be.visible');
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    //     cy.get('#last_name').invoke('attr', 'placeholder').should('contain', 'Enter your Last Name')
    //     cy.get('#last_name').type('Chowdary').should('have.value','Chowdary')
    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#errorToast").then($error => {
    //         if ($error.is(':visible')){
    //             cy.get('#errorToast').should('have.text', '\n          Please accept T&C and privacy policy\n        ').should('be.visible');
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    //     cy.get('#email').type(mailwithoutdomain).should('have.value',mailwithoutdomain)
    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#errorToast").then($error => {
    //         if ($error.is(':visible')){
    //             cy.get('#errorToast').should('have.text', '\n          Please accept T&C and privacy policy\n        ').should('be.visible');
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    //     cy.get('.iti__flag-container').click().type("india").contains('India (भारत)').click()
    //     cy.get('#phone').type('63043609').should('have.value','63043609')
    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#errorToast").then($error => {
    //         if ($error.is(':visible')){
    //             cy.get('#errorToast').should('have.text', '\n          Please accept T&C and privacy policy\n        ').should('be.visible');
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    //     cy.get('#msg').type('Hello')
    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#errorToast").then($error => {
    //         if ($error.is(':visible')){
    //             cy.get('#errorToast').should('have.text', '\n          Please accept T&C and privacy policy\n        ').should('be.visible');
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    //     cy.get('input[type=checkbox]').click()
    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#errorToast").then($error => {
    //         if ($error.is(':visible')){
    //             cy.get('#errorToast').should('have.text', '\n          Please enter a valid email address\n        ').should('be.visible');
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    //     cy.get('#first_name').clear()
    //     cy.get('#first_name').type('Hemanth').should('have.value','Hemanth')
    //     cy.get('#last_name').clear()
    //     cy.get('#last_name').type('Chowdary').should('have.value','Chowdary')
    //     cy.get('#email').clear()
    //     cy.get('#email').type(mail).should('have.value',mail)
    //     cy.get('.iti__flag-container').click().type("india").contains('India (भारत)')
    //     cy.get('#phone').clear()
    //     cy.get('#phone').type('6304360911').should('have.value','6304360911')
    //     cy.get('#msg').type('thanks for this opputunity.Thank you')
    //     cy.get('.col-md-12 > .blue-btn').click()
    //     cy.get("#successToast").then($success => {
    //         if ($success.is(':visible')){
    //             cy.get('#successToast').should('have.text', ' Your request has been submitted\n          successfully\n        ').should('be.visible');
    //             cy.log("here all the conditions are satisified")
    //         }
    //         else{
    //             expect(true).to.equal(false)
    //         }
    //     })
    // });

    it('Checking free traial', () => {
        cy.visit(url+'free-trial/')
        cy.log("Number Validation checking")
        // cy.get('#first_name').type('Hemanth').should('have.value','Hemanth')
        // cy.get('#last_name').type('Chowdary').should('have.value','Chowdary')
        cy.get('.iti__flag-container').click().type("india").contains('India (भारत)').click()
        cy.get('#phone2').type('630436091')     
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#errorToast").then($error => {
            if ($error.is(':visible')){
              cy.get('#errorToast').should('have.text', '\n            All fields are required\n          ').should('be.visible').should('be.visible');
            }
            else{
              expect(true).to.equal(false)
            }
          })
        cy.get('#phone2').clear()
        cy.log("Checking the mail validation")
        cy.get('#first_name').type('Hemanth').should('have.value','Hemanth')
        cy.get('#last_name').type('Chowdary').should('have.value','Chowdary')
        cy.wait(1000);
        cy.get('.iti__flag-container').click().type("india").contains('India (भारत)')
        cy.get('#phone2').type('6304360911').should('have.value','6304360911')
        cy.get('#email').type(mailwithoutdomain)
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#errorToast").then($error => {
            if ($error.is(':visible')){
              cy.get('#errorToast').should('have.text', '\n            Please enter a valid email address\n          ').should('be.visible');
            }
            else{
              expect(true).to.equal(false)
            }
          })
        cy.get('#email').clear()
        cy.get('#email').type(mailwithoutdomain+'@gmail')
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#errorToast").then($error => {
            if ($error.is(':visible')){
              cy.get('#errorToast').should('have.text', '\n            Please enter a valid email address\n          ').should('be.visible');
            }
            else{
              expect(true).to.equal(false)
            }
          })
        cy.reload()
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#errorToast").then($error => {
            if ($error.is(':visible')){
              cy.get('#errorToast').should('have.text', '\n            All fields are required\n          ').should('be.visible');
            }
            else{
              expect(true).to.equal(false)
            }
          })
        cy.get('#first_name').type('Hemanth').should('have.value','Hemanth')
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#errorToast").then($error => {
            if ($error.is(':visible')){
              cy.get('#errorToast').should('have.text', '\n            All fields are required\n          ').should('be.visible');
            }
            else{
              expect(true).to.equal(false)
            }
          })
        cy.get('#last_name').type('Chowdary').should('have.value','Chowdary')
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#errorToast").then($error => {
            if ($error.is(':visible')){
              cy.get('#errorToast').should('have.text', '\n            All fields are required\n          ').should('be.visible');
            }
            else{
              expect(true).to.equal(false)
            }
          })
        cy.get('.iti__flag-container').click().type("india").contains('India (भारत)').click()
        cy.get('#phone2').type('6304360933').should('have.value','6304360933')
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#errorToast").then($error => {
            if ($error.is(':visible')){
              cy.get('#errorToast').should('have.text', '\n            All fields are required\n          ').should('be.visible');
            }
            else{
              expect(true).to.equal(false)
            }
          })
        cy.get('#email').type(mail).should('have.value',mail)
        cy.get('.col-md-12 > .blue-btn').click()
        cy.get("#successToast").then($success => {
            if ($success.is(':visible')){
                cy.get('#successToast').should('have.text', ' Your request has been submitted\n            successfully\n          ').should('be.visible')
                cy.log("here all the conditions are satisified")
            }
            else{
                expect(true).to.equal(false)
            }
        })
    });
    
    
})
