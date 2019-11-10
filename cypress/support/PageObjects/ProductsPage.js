class LoginPage
{
    loginTextBox()
    {
        return cy.get('#login_username')
    }

    passwordTextBox()
    {
        return cy.get('#login_password')
    }

    loginPageNextBtn()
    {
        return cy.get('#login_submit > .ng-binding')
    }

    loginBtn()
    {
        return cy.xpath("//span[contains(text(),'Login')]")
    }


}

export default LoginPage;