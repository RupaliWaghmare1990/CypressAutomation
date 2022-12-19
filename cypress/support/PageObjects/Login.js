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
   return cy.xpath("(//span[@class='block'])[2]")
}



}
export default Login;