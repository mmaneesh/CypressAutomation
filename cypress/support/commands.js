// ***********************************************
// ##########################################   IMPORTS   #############################################################
import LoginPage from 'C:/Users/madman02/ManeeshAutomationLearning/CypressAutomation/cypress/support/PageObjects/LoginPage'
import SearchCutomerPage from 'C:/Users/madman02/ManeeshAutomationLearning/CypressAutomation/cypress/support/PageObjects/SearchCustomerPage'
import StudioModulePage from 'C:/Users/madman02/ManeeshAutomationLearning/CypressAutomation/cypress/support/PageObjects/StudioModulePage'
const loginPage = new LoginPage()
const searchCustPage = new SearchCutomerPage()
const studioPage = new StudioModulePage()


//############################################   CUSTOM COMMANDS   #################################################

// INV LOGIN
Cypress.Commands.add("invLogin", (url, username, password) => {     
    cy.visit(url)
    cy.wait(2000)
    loginPage.loginTextBox().should('exist');
    loginPage.loginTextBox().type(username);
    loginPage.loginPageNextBtn().should('have.text', 'Next');
    loginPage.loginPageNextBtn().click();
    cy.wait(2000);
    loginPage.passwordTextBox().type(password)
    loginPage.loginBtn().should('exist')
    loginPage.loginBtn().click()
    cy.log('Invision Login Successful')
    cy.wait(3000)
})

// SELECTING STUDIO MODULE
Cypress.Commands.add("selectStudio", () => { 
    console.log('Opening Studio Module')
    cy.xpath("//div[@class='c-header-section c-header-logo ng-isolate-scope is-selectable c-header-menu']").should('exist')
    cy.xpath("//div[@class='c-header-section c-header-logo ng-isolate-scope is-selectable c-header-menu']").click('bottomRight')
    cy.screenshot()
    cy.log('Clicked On The Menu Icon On The Landing Page')
    cy.wait(2000)
    cy.xpath("//div[@class='c-popoutAppSwitcher-item c-popoutAppSwitcher-item--studio']//*[@class='c-icon']").click()
    cy.wait(3000)
})

//SELECTING CUSTOMER CARE
Cypress.Commands.add("selectCustomerCare", () => { 
    console.log('Opening Studio Module')
    cy.xpath("//div[@class='c-header-section c-header-logo ng-isolate-scope is-selectable c-header-menu']").should('exist')
    cy.xpath("//div[@class='c-header-section c-header-logo ng-isolate-scope is-selectable c-header-menu']").click('bottomRight')
    cy.log('Clicked On The Menu Icon On The Landing Page')
    cy.wait(2000)
    cy.xpath("//div[@class='c-popoutAppSwitcher-item c-popoutAppSwitcher-item--customerCare is-active']//*[@class='c-icon']").click()
    cy.wait(3000)
})

// CLICKING ON CHANNELS SUB MENU
Cypress.Commands.add("clickChannelSubMenu", () => { 
    if(studioPage.optionChannel().should('exist'))
    {
        studioPage.optionChannel().click();
        cy.log('Clicked On The Products Sub Menu Item')
        cy.wait(2000)
        const chnlTextEle = cy.xpath("//div[@class='c-heading-label ng-binding']")
        if(chnlTextEle.should('exist') && chnlTextEle.should('have.text', 'Channels'))
        {
            cy.log('Successfully Landed On The Channels Page')
        }
    }
})

// CLICKING ON PRODUCTS SUB MENU
Cypress.Commands.add("clickProductSubMenu", () => { 
    if(cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Products')]").should('exist'))
    {
        cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Products')]").click()
        cy.log('Clicked On The Products Sub Menu Item')
        cy.wait(2000)
        const PrdctTextEle = cy.xpath("//div[@class='c-heading-label ng-binding']")
        if(PrdctTextEle.should('exist') && PrdctTextEle.should('have.text', 'Products'))
        {
            cy.log('Successfully Landed On The Products Page')
        }
     }
})

// SEARCHING PRODUCT
Cypress.Commands.add("searchProduct", (productName) => { 
    if(cy.xpath("//input[@placeholder='Search...']").should('exist'))
        {
            cy.xpath("//input[@placeholder='Search...']").type(productName)
            cy.xpath("//input[@placeholder='Search...']").type('{enter}')
            cy.log('Searching For A Product')
            cy.wait(2000)
            cy.xpath("//a[@class='ng-binding ng-scope ng-isolate-scope c-smartTruncate is-truncated']").should('have.text', productName)
        }
})

// SEARCH CHANNEL
Cypress.Commands.add("searchChannel", (channelName) => { 
    if(cy.xpath("//input[@placeholder='Search by Name...']").should('exist'))
    {
        cy.xpath("//input[@placeholder='Search by Name...']").type(channelName)
        cy.log('Channel Name Entered Successfully')
        cy.xpath("//input[@placeholder='Search by Name...']").type('{enter}')
        cy.wait(2000)
        cy.xpath("//div[@class='ui-grid-canvas']").should('exist')
    } 
})

// INV LOGOUT
Cypress.Commands.add("invLogout", () => { 
    cy.xpath("//div[@class='c-button c-button--icon c-header-menu c-header-action l-centerBoth u-sizeFull']//*[@class='c-icon']").click()
    cy.xpath("//div[contains(text(),'Logout')]").click()
    cy.log('Clicked On The Logout Link Successfully')
    cy.get('.c-brand-logo').should('exist')
    cy.log('Logged out Of Invision Successfully')
})
