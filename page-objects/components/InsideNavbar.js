
import Base from '../Base'
 
class InsideNavbar extends Base {
	get accountActivityTab() {
		return $('#account_activity_tab')
	}
 
	get payBillsTab() {
		return $('#pay_bills_tab')
	}
 
	get filtersLink() {
		return $('#tabs > ul > li:nth-child(2) > a')
	}
 
	get exchangeLink() {
		return $('#tabs > ul > li:nth-child(3) > a')
	}
 
	clickAccountActivityTab() {
		this.accountActivityTab.waitForExist()
		this.accountActivityTab.click()
	}
 
	clickPayBillsTab() {
		this.payBillsTab.waitForExist()
		this.payBillsTab.click()
	}
 
	clickFiltersLink() {
		this.filtersLink.waitForExist()
		this.filtersLink.click()
	}
 
	clickExchangeLink() {
		this.exchangeLink.waitForExist()
		this.exchangeLink.click()
	}
}
export default new InsideNavbar()
 