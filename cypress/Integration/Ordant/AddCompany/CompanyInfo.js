/// <reference types="Cypress" />
import { camelCase } from 'cypress/types/lodash'
import Login from '../../../support/PageObjects/Login'
const login =new Login()
beforeEach(()=>
{
cy.fixture('LogInForm').then(function(data)
    {
        this.data=data})})

      
describe('My first test ', function() 
    {

        it('My first test case',function ()
        {
            cy.visit('/',{failOnStatusCode:false })
            cy.wait(8000)
            login.EnterUserName().clear().type(this.data.Username)
            login.EnterPassword().clear().type(this.data.Password)
            login.ClickSignInButton().click().then(function()
            { 
                cy.r({

                        method:'GET',
                        url: 'https://service-development.ordant.com:8000/v3/' , failOnStatusCode: false,
                       
                    }).then((resp) => {
                            const companies =resp.body[0].companies
                            return companies

                    }).then((companies)=>
                    {cy.request({
                        method: 'GET',
                        url: 'https://service-development.ordant.com:8000/v3/' +companies
                    })




                    })

            })
        
                

        })

    })