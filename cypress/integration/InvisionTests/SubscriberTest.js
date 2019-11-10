/// <reference types="Cypress" />
import LoginPage from 'C:/Users/madman02/ManeeshAutomationLearning/CypressAutomation/cypress/support/PageObjects/LoginPage'

describe('Invision Customer Care Module - Subscriber Search', function() 
{
    it('Launch And Login To Invision', function()
    {
        const loginPage = new LoginPage()
        cy.visit('https://qa10.invision.ascendon.tv/login')
        cy.wait(2000)
        loginPage.loginTextBox().should('exist')
        loginPage.loginTextBox().type('madman02')
        loginPage.loginPageNextBtn().should('have.text', 'Next')
        loginPage.loginPageNextBtn().click()
        loginPage.passwordTextBox().should('exist')
        loginPage.passwordTextBox().type('Mannu@1987')
        loginPage.loginBtn().should('exist')
        loginPage.loginBtn().click()
        cy.log('Invision Login Successful')
        cy.wait(3000)
    })

    it('Click On Menu Icon', function()
        {
            cy.xpath("//div[@class='c-header-section c-header-logo ng-isolate-scope is-selectable c-header-menu']").should('exist')
            cy.xpath("//div[@class='c-header-section c-header-logo ng-isolate-scope is-selectable c-header-menu']").click('bottomRight')
            cy.log('Clicked On The Menu Icon On The Landing Page')
            cy.wait(2000)
            cy.xpath("//div[@class='c-popoutAppSwitcher-item c-popoutAppSwitcher-item--customerCare is-active']//*[@class='c-icon']").click()
        })

    it('Searching For A Subscriber', function()
    {
        cy.xpath('//div[@class="c-callToAction-label ng-binding"]').should('have.text', 'Welcome to Ascendon Customer Care')
        cy.get('#navigator-item-search > .c-navigatorItem-faceplate > .c-navigatorItem-icon > .c-icon').should('exist')
        cy.get('#navigator-item-search > .c-navigatorItem-faceplate > .c-navigatorItem-icon > .c-icon').click()
        cy.log('Clicked On The Search Icon On The Customer Page')
        cy.wait(2000)
        cy.xpath("//form[@id='customerSearchForm']//div[@class='c-searchPanel-header l-vertical-noShrink']").should('exist')
        cy.xpath("//form[@id='customerSearchForm']//div[@class='c-searchPanel-header l-vertical-noShrink']").should('contain.text', 'SEARCH')
    })

    it('Enter Subscriber Id And Click Search', function()
    {
        cy.get('#subscriberId').should('exist')
        cy.get('#subscriberId').type('347507')
        cy.log('Entered Subscriber id Successfully')
        cy.get('.c-searchPanel-actions > .c-button').should('exist')
        cy.get('.c-searchPanel-actions > .c-button').click()
        cy.wait(2000)
        cy.get('.c-navGroup-navList > .c-link').should('contain.text','maneesh.maddala@csgi.com')
        cy.log('The Email Address verified Successfully')
    })

    it('Ordering A New Product', function()
    {
        cy.get('.c-navGroup-navList > :nth-child(1) > .ng-binding').should('exist')
        cy.get('.c-navGroup-navList > :nth-child(1) > .ng-binding').should('contain.text', 'Start Product Order')
        cy.get('.c-navGroup-navList > :nth-child(1) > .ng-binding').click()
        cy.log('Successfully Clicked On Start Product order Link')
        cy.wait(1000)
        cy.get('.c-searchForm-searchInput').type('Interstellar')
        cy.wait(1000)
        cy.xpath("//button[@class='c-selectButton u-ml+ ng-binding'][contains(.,'Go')]").click()
        cy.log('Successfully Clicked On Go Button On The Products Page')
        cy.wait(2000)
    })

    it('Logging Out Of Invision', function()
    {
       cy.xpath("//div[@class='c-button c-button--icon c-header-menu c-header-action l-centerBoth u-sizeFull']//*[@class='c-icon']").click()
       cy.xpath("//div[contains(text(),'Logout')]").click()
       cy.log('Clicked On The Logout Link Successfully')
       cy.get('.c-brand-logo').should('exist')
       cy.log('Logged out Of Invision Successfully')
    })

} )