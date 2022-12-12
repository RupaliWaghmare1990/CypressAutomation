class Login
{

 EnterUserName()
 {
   return cy.get('input[type="text"]')
 }

EnterPassword()
{
    return cy.get('input[type=password]')
}

ClickSignInButton()
{
   return cy.get('.q-form > .q-btn > .q-btn__content')
}



}
export default Login;