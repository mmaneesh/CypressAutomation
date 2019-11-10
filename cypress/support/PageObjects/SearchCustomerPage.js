class SaerchCustomerPage
{

    custWelcomeText()
    {
        return cy.xpath('//div[@class="c-callToAction-label ng-binding"]').should('have.text', 'Welcome to Ascendon Customer Care')
    }

    searchIcon()
    {
        return cy.get('#navigator-item-search > .c-navigatorItem-faceplate > .c-navigatorItem-icon > .c-icon')
    }

    recentCustomersIcon()
    {
        return cy.get('#login_password')
    }

    custFirstName()
    {
        return cy.xpath("//input[@id='firstName']")
    }

    custLastName()
    {
        return cy.xpath("//input[@id='lastName']")
    }

    custEmailLogin()
    {
        return cy.xpath("//input[@id='email']")
    }

    custID()
    {
        return cy.xpath("//input[@id='subscriberId']")
    }

    custActNumber()
    {
        return cy.xpath("//input[@id='armAccountNumber']")
    }

    custExtID()
    {
        return cy.xpath("//input[@id='externalId']")
    }

    custContactNumber()
    {
        return cy.xpath("//input[@id='phoneNumber']")
    }

    custServiceID()
    {
        return cy.xpath("//input[@id='serviceId']")
    }

    custNetwork()
    {
        return cy.xpath("//input[@id='networkName']")
    }

    searchButton()
    {
        return cy.get('.c-searchPanel-actions > .c-button')
    }

}

export default SaerchCustomerPage;