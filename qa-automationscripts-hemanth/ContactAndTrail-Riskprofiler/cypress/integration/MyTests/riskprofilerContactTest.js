describe('RiskProfiler', () => {
    it('See RiskProfiler In Action', () => {
        cy.visit('https://staging-site-crp-4470.riskprofiler.io/')
        // Checking title of the page so that we can confirm we are in coorect page
        cy.title().should('eq','Risk Profiler')
        scrollTo(0,500);
        cy.get('.trial-input-wrapper > input[type=text]').type("hemanth.chowdary@ethicalhat.com").should('have.value','hemanth.chowdary@ethicalhat.com')
        cy.get(".trial-input-wrapper > .btn").click()
    });   
    it('Contact Page Validation whether it is in correct page or not', () => {
        cy.title().should('eq','Risk Profiler | Contact')
        cy.url().should('include','contact')
    });

    it('Checking Contact Page', () => {
        cy.get('#first_name').invoke('attr', 'placeholder').should('contain', 'Enter your First Name')
        cy.get('#first_name').type('Hemanth').should('have.value','Hemanth')
        cy.get('#last_name').invoke('attr', 'placeholder').should('contain', 'Enter your Last Name')
        cy.get('#last_name').type('Chowdary').should('have.value','Chowdary')
        cy.get('#email').should('have.value','hemanth.chowdary@ethicalhat.com')
        cy.get('.iti__flag-container').click().type("india").contains('India (भारत)').click()
        cy.get('#phone').invoke('attr', 'placeholder').should('contain', 'Enter your mobile no')
        cy.get('#phone').type('6304360911').should('have.value','6304360911')
        cy.get('#msg').type('thanks for this opputunity.Thank you').should('have.value','thanks for this opputunity.Thank you')
        cy.get('input[type=checkbox]').click()
        cy.get('.col-md-12 > .blue-btn').click()
        cy.on('window:confirm',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Your request has been submitted successfully');
         })

        cy.get('a[href="/free-trial"]').click()
    });
    it('Checking wheather the page is in free trail page or not', () => {
        cy.title().should('eq','Risk Profiler | Free Trial')
        cy.url().should('include','free-trial')
    });
    it('Check Free trail page', () => {
        cy.get('#first_name').invoke('attr', 'placeholder').should('contain', 'Enter your First Name')
        cy.get('#first_name').type('Hemanth').should('have.value','Hemanth')
        cy.get('#last_name').invoke('attr', 'placeholder').should('contain', 'Enter your Last Name')
        cy.get('#last_name').type('Chowdary').should('have.value','Chowdary')
        cy.get('.iti__flag-container').click().type("india").contains('India (भारत)').click()
        cy.get('#phone2').invoke('attr', 'placeholder').should('contain', 'Enter your phone number')
        cy.get('#phone2').type('6304360911').should('have.value','6304360911')
        cy.get('#email').type('hemanth.chowdary@ethicalhat.com').should('have.value','hemanth.chowdary@ethicalhat.com')
        cy.get('.col-md-12 > .blue-btn').click()
        cy.on('window:confirm',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Your request has been submitted successfully');
         })
    });
    it('Go back to 1st Page', () => {
        cy.go('back')
        cy.title().should('eq','Risk Profiler | Contact')
        cy.url().should('include','contact')
        cy.go('back')
        cy.title().should('eq','Risk Profiler')
    });

    // Testing by giving wrong inputs to verify
    it('See RiskProfiler In Action with wrong input', () => {
        cy.get('.trial-input-wrapper > input[type=text]').invoke('prop', 'validationMessage')
        .should('equal', 'Please fill out this field.')
    });
})

