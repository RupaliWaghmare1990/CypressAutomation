beforeEach(()=>
{

    cy.fixture('LogInForm').then(function(data)
    {
        this.data=data

    })
});