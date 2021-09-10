describe('MyTestSuite', () => 
{
    
    it('Login Scenario', () =>
    {
        cy.visit('https://internshala.com/')  //to visit the website 
        // cy.title().should('eq','reddit: the front page of the internet') //here should be checking whether it is there or not (it will check whethe the name is nopcommerce... or not)
        cy.get('.navbar-nav > :nth-child(5) > .btn').click()
        cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form > :nth-child(2) > #modal_email')
        .type('fake@email.com').should('have.value', 'fake@email.com')  
        cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form > :nth-child(3) > #modal_password')
        .type('fakepassword').should('have.value','fakepassword')

    })
    it('.submit() - submit a form', () => {
        cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form')
          .find('[type="email"]')
          cy.get('.show > .modal-dialog > .modal-content > .modal-header > .close').click()
        //   cy.get('.show > .modal-dialog > .modal-content > .modal-body > #modal-login-form').submit()
        //   .next().should('contain', 'This email id is not registered with Internshala. To register, please click here if you are a student or here if you an employer. If you are a T&P head, register here.')

    })
    it('.Clicks-checking', () => {
        cy.get('#internships_new_superscript').click()
        cy.get('#close_popup').click()  
            
    });
    it('.Filtering - checking', () => {

        cy.get('#work_from_home').should('not.be.visible').check({ force: true})
        cy.get('#work_from_home').should('not.be.visible').uncheck({force:true})
        cy.get('#part_time').should('not.be.visible').check({ force: true})
        cy.get('#part_time').should('not.be.visible').uncheck({force:true})
        // cy.get('#start_date').click;
        //choose previous month
        // cy.contains('Prev').click();
        //choose next month 
        // cy.contains('Next').click();
        //choose date 24
        // cy.contains('24').click();
        // cy.get('.reset_link_container').click()
    });

    it('.Searching', () => {
        cy.visit('https://internshala.com/internships/')
        cy.get('#close_popup').click()
        cy.get('#keywords').type('Marketing').should('have.value', 'Marketing')
        cy.get('#search').click()
        // cy.get('#keywords').should('have.value', 'Marketing')
    });
    it('.Scrolling page', () => {
        cy.scrollTo(0, 1500) // Scroll the window 500px down
        cy.get('#filters').scrollTo('bottom') 
        cy.get('.button_container > .show_in_desktop').click()
    });
    


    

})