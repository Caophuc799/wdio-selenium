import { short } from '../../config/timeouts'
describe('Browser Actions', () => {
	it('Inputs', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
        const input = $('#developer-name')
		input.waitForExist()
		input.setValue('Phuc')
		browser.pause(short)
		input.clearValue()
		browser.pause(short)
		input.addValue('Cao')
		browser.pause(short)
	})
 
	it('Click', () => {
		const buttonPupulate = $('#populate')
		buttonPupulate.waitForExist()
		buttonPupulate.click()
	})
 
	it('Checkbox & Radio Button', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const radio = $('#linux')
		radio.waitForExist()
		radio.click()
		browser.pause(short)
 
		const checkbox = $('#remote-testing')
		checkbox.waitForExist()
		checkbox.click()
		browser.pause(short)
	})
 
	it('Select Box', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const select = $('#preferred-interface')
		select.waitForExist()
		select.selectByVisibleText('JavaScript API')
		browser.pause(short)
	})
})