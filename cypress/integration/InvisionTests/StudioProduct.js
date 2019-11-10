/// <reference types="Cypress" />

describe('Invision Studio Tests - Products', function() 
{
    //beforeeach annotation: This block executes before every each block
    this.beforeEach(function()
    {
        cy.fixture('StudioProduct_TestData').then(function(ProductTestData)
        {
            this.ProductTestData = ProductTestData
        })
    })

    //Launching Invision
    it('Launch And Login To Invision', function()
    {
        cy.invLogin(this.ProductTestData.url, this.ProductTestData.Username, this.ProductTestData.Password)
    })

    //Clicking On The Menu Items And Select Studio
    it('Selecting Studio Option From Menu', function()
    {
        cy.selectStudio()
    })

    // Clicking On Products Under Studio
    it('Clicking On The products Sub Menu', function()
    {
       cy.clickProductSubMenu()
    })

    //Searching For A Multiple Product
    it('Searching For A Product And Clicking On The Product Link', function()
    {
        this.ProductTestData.Productname.forEach(function(element){
            cy.searchProduct(element)
            cy.wait(1000)
            if(cy.xpath("//a[@class='ng-binding ng-scope ng-isolate-scope c-smartTruncate is-truncated']").should('exist'))
            {
                cy.xpath("//a[@class='ng-binding ng-scope ng-isolate-scope c-smartTruncate is-truncated']").click()
                cy.wait(2000)
                cy.xpath("//div[@class='c-heading-label ng-binding']").should('have.text', 'General Information')
                cy.xpath("//div[@class='c-button c-button--icon ng-scope ng-isolate-scope']").should('exist')
                cy.xpath("//div[@class='c-button c-button--primary ng-binding ng-scope']").should('exist')
                cy.xpath("//div[@class='c-openNewWindow']").should('exist')
                //cy.pause()
                // Navigating Back to Products
                cy.xpath("//div[@class='c-breadcrumb ng-binding']").should('exist')
                cy.xpath("//div[@class='c-breadcrumb ng-binding']").click()
                cy.wait(1000)
                cy.xpath("//inv-icon[@class='c-erasableInput-icon ng-isolate-scope']//*[@class='c-icon']").click()
            }
        })        
    })

    //Logging Out Of invision
    it('Logging Out Of Invision', function()
    {
        cy.invLogout()
    })


})