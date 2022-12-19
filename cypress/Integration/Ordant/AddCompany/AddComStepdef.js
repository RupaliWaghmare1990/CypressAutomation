/// <reference types="Cypress" />

 import { should } from 'chai';
import Login from '../../../support/PageObjects/Login'
 const login =new Login()


Cypress.on('uncaught:exception',(err,runnable) =>{
return false
})

beforeEach(()=>
{

    cy.fixture('LogInForm').then(function(data)
    {
        this.data=data})

        cy.intercept({
        method: 'POST',
        url: 'https://service-development.ordant.com:8000/v3/companies',
        
      }).as('createCom')
      
      cy.intercept('POST', 'https://service-development.ordant.com:8000/v3/authenticate').as('authenticate')


})
//'https://service-development.ordant.com:8000/v3/contact'



describe('My first test ', function() 
    {

        it('My first test case',function ()
        {
            Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
            });
            cy.visit('/',{failOnStatusCode:false })
            cy.wait(8000)
            login.EnterUserName().clear().type(this.data.Username)
            login.EnterPassword().clear().type(this.data.Password)
    
            login.ClickSignInButton().click()
            
        
            cy.wait(10000)
            cy.wait('@authenticate').its('response.statusCode').should('eq', 200)
            cy.wait(10000)
            cy.visit('/companies',{failOnStatusCode:false})
 
           // cy.wait(10000)

             //cy.url().should('contain', '/companies')
            //cy.url().should('include','/companies')
            cy.log('....Successfully')
        
    
          
            cy.contains('Create Company').click({force: true})
            cy.get('#companyNameId').type("ORDANT").type('{enter}')
            cy.xpath("//button[@type='submit']").click({force: true})
           

           // cy.intercept('POST','**/companies/').as('companies')
             cy.get('button.q-btn[type=submit]').click()
            
            .its('response.body')
                .then((body) => {
                  // cy.wait('@createCom')
                 //const bodyData = JSON.parse(responce.body)
                  cy.log(JSON.stringify(body))
                 })


          
            cy.wait(10000)
            cy.wait(2000)
         
            })



            
        it.skip('My first test case',function ()
        {
            cy.visit('/',{failOnStatusCode:false })
            cy.wait(8000)
            login.EnterUserName().clear().type(this.data.Username)
            login.EnterPassword().clear().type(this.data.Password)
            login.ClickSignInButton().click().then(function()
            { 
                cy.intercept({

                        method:'GET',
                        url: 'https://test-suite-v4.ordant.com/'
                    }).then((resp) => {
                        const bodyData = JSON.parse(resp.body)
                        cy.log(JSON.stringify(body))
                            return companies

                     })
                     //.then((companies)=>
                    // {cy.request({
                    //     method: 'GET',
                    //     url: 'https://service-development.ordant.com:8000/v3/' +companies
                    // })




                

            })
        
                

        })








            
          

           
    })
       
 