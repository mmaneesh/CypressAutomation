/// <reference types="Cypress" />

describe('Invision Studio Tests - Channel', function() 
{
    //beforeeach hook: This block executes before every each block
    this.beforeEach(function()
    {
        cy.fixture('StudioChannel_TestData').then(function(ChannelTestData)
        {
            this.ChannelTestData = ChannelTestData
        })
    })

    it('Launch And Login To Invision', function()
    {
        cy.invLogin(this.ChannelTestData.url, this.ChannelTestData.Username, this.ChannelTestData.Password)
    })

    it('Selecting Studio Option From Menu', function()
    {
        cy.selectStudio()
    })

    it('Clicking On The Channel Sub Menu', function()
    {
       cy.clickChannelSubMenu()
    })

    it('Searching For A Channel', function()
    {
       cy.searchChannel(this.ChannelTestData.ChannelName)
    })

    it('Clicking On The Channel Link', function()
    {
        if(cy.xpath("//div[@class='u-flex u-flexMiddle u-flexSpaced']").should('exist'))
        {
            cy.xpath("//div[@class='u-flex u-flexMiddle u-flexSpaced']").should('have.length', 3)
            cy.xpath("//div[@class='u-flex u-flexMiddle u-flexSpaced']").each(($el, index, $list) =>
            {
                const chnlName = $el.find('a.ng-binding.ng-isolate-scope.c-smartTruncate.is-truncated').text()
                cy.log(chnlName)
                if(chnlName.includes('Chicago'))
                {
                    cy.contains('ABC (Chicago)').click()
                }
            })
            cy.wait(2000)
            cy.xpath("//div[@class='c-heading-label ng-binding']").should('have.text', 'General Information')
            //Validation Using Jquery
            cy.xpath("//div[@class='c-heading-label ng-binding']").then(function(strtext)
            {
                cy.log(strtext.text())
            })
            cy.xpath("//div[@class='c-button c-button--icon ng-scope ng-isolate-scope']").should('exist')
            cy.xpath("//button[@class='c-button c-button--primary ng-binding']").should('exist')
            cy.xpath("//open-new-window[@class='ng-isolate-scope']").should('exist')
        }   
    })
    
    it('Logging Out Of Invision', function()
    {
      cy.invLogout()
    })


})