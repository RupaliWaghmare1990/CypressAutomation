/// <reference types="Cypress" />

 import { should } from 'chai';
import Login from '../../../support/PageObjects/Login'
 const login =new Login()

// import { Given, When,Then ,And } from "cypress-cucumber-preprocessor/steps";
// Given ('I open Create Company form ',()=>
// {
//     cy.get('.block').click()
//     cy.wait(4000)
// })


beforeEach(()=>
{

    cy.fixture('LogInForm').then(function(data)
    {
        this.data=data

    })
});
describe('My first test ', function() 
    {

        it('My first test case',function ()
        {
            Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
            });
        cy.visit("https://development-v4.ordant.com/",{failOnStatusCode:false })

        
        cy.wait(8000)
        login.EnterUserName().clear().type(this.data.Username)
        login.EnterPassword().clear().type(this.data.Password)
    
        login.ClickSignInButton().click().then(function()
        {
        
      cy.visit("https://development-v4.ordant.com/companies",{failOnStatusCode:false})

        })
        cy.wait(10000)
       
       
        cy.url().should('contain', '/companies')
        //cy.url().should('include','/companies')
        cy.log('....Successfully')
        
    

       cy.get('.text-sm > .q-btn > .q-btn__content > .block').click()
       cy.wait(1000)

       cy.get('input[type=text]').should('have.lenght',3).type('ORDANT')
      
       //cy.get('.q-field__native q-placeholder text-[14px] text-gray-700').should('have.length',3)
      
       //cy.get('').type('ORDANT ')


       //cy.contains('Add Company').should('have.length',11).click()
       //cy.contains('Cancel').click()
        })

    })