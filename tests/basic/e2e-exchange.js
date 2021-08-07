import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'
import ExchangePage from '../../page-objects/pages/ExchangePage'
import Navbar from '../../page-objects/components/Navbar'
import InsideNavbar from '../../page-objects/components/InsideNavbar'
 
describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
 
    it('Should make currency exchange', () => {
        InsideNavbar.clickPayBillsTab()
        InsideNavbar.clickExchangeLink()
        const currencySelect = ExchangePage.currencySelect
        currencySelect.waitForExist()
        currencySelect.selectByAttribute('value', 'GBP')
        ExchangePage.setAmount('500')
        ExchangePage.selectDollars()
        ExchangePage.submitForm()
        const message = ExchangePage.message
        expect(message).toHaveText(
            'Foreign currency cash was successfully purchased.'
        )
    })
})
 