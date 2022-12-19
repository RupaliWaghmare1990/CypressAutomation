beforeEach(()=>
{

    cy.login('staff', '@rdant2020$taff')
    cy.fixture('LogInForm').then(function(data)
    {
        this.data=data

    })
});