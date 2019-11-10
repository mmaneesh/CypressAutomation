class StudioModulePage
{
    optionPP()
    {
        return cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Pricing Plans')]")
    }

    optionChannel()
    {
        return cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Channels')]")
    }

    optionProducts()
    {
        return cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Products')]")
    }

    optionPrograms()
    {
        return cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Programs')]")
    }

    optionChannelBrands()
    {
        return cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Channel Brands')]")
    }

    optionChnlAsso()
    {
        return cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Channel Associations')]")
    }

    optionStorefront()
    {
        return cy.xpath("//div[@class='c-navigatorItem-text ng-binding ng-isolate-scope c-smartTruncate is-truncated'][contains(text(),'Storefront')]")
    }

}

export default StudioModulePage;