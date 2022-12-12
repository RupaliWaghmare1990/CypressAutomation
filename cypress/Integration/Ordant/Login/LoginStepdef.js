/// <reference types="Cypress" />

import Login from '../../../support/PageObjects/Login'

import { Given, When,Then ,And } from "cypress-cucumber-preprocessor/steps";

const login =new Login()
Given ('I open Ordantv4 Login Page',()=>
{
    cy.wait(8000)
    cy.visit("https://development-v4.ordant.com/",{failOnStatusCode:false })
    cy.wait(4000)
})

//When I enter Login details
When('I enter Login details',function()
{
    cy.wait(4000)
    login.EnterUserName().clear().type(this.data.Username)
    login.EnterPassword().clear().type(this.data.Password)

})

//Then Click on submit and verify Welcome
Then('Click on submit and verify Welcome',()=>
{
    login.ClickSignInButton().click().then(function()
    {
    cy.visit("https://development-v4.ordant.com/companies",{failOnStatusCode:false})
    })
       
     cy.wait(3000)
     cy.get('.col-8').should('have.text','Company List')
     cy.log("You log in Successfully")
         

     cy.wait(9000)
})



// describe('My first test ', function() {

//     it('My first test case',function ()
//     {
//     })

    
// }) 

       
       
       
            
            
           
         
         
    