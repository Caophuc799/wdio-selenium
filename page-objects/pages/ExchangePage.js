import Base from '../Base'
 
class ExchangePage extends Base {
	get currencySelect() {
		return $('#pc_currency')
	}
 
	get amountInput() {
		return $('#pc_amount')
	}
 
	get dollarButton() {
		return $('#pc_inDollars_true')
	}
 
	get submitButton() {
		return $('#purchase_cash')
	}
 
	get message() {
		return $('#alert_content')
	}
 
	setAmount(num) {
		this.amountInput.waitForExist()
		this.amountInput.setValue(num)
	}
 
	selectDollars() {
		this.dollarButton.click()
	}
 
	submitForm() {
		this.submitButton.click()
	}
}
export default new ExchangePage()