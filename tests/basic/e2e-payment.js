import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'
import PaymentPage from '../../page-objects/pages/PaymentPage'
import InsideNavbar from '../../page-objects/components/InsideNavbar'
import Navbar from '../../page-objects/components/Navbar'
 
describe('E2E Tests - Pay', () => {
	it('Should log into application', () => {
		App.openLoginPage()
		LoginPage.login('username', 'password')
		Navbar.insideNavbarIsVisible()
	})
 
	it('Should make payment', () => {
		InsideNavbar.clickPayBillsTab()
		const selectPayee = PaymentPage.payeeSelect
		selectPayee.waitForExist()
		selectPayee.selectByAttribute('value', 'apple')
		const selectAccount = PaymentPage.accountSelect
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Loan')
		PaymentPage.fillForm('500', '2020-03-31', 'Test')
		PaymentPage.submitForm()
		const message = PaymentPage.message
		expect(message).toHaveText('The payment was successfully submitted.')
	})
})