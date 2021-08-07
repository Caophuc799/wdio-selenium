import App from '../../page-objects/App'
describe('E2E Tests - Search', () => {
	it('Should load homepage', () => {
		App.openHomePage()
		$('#searchTerm').waitForExist()
	})
 
	it('Should submit searchbox', () => {
		$('#searchTerm').setValue('bank')
		browser.keys('Enter')
		const resultsTitle = $('h2')
		resultsTitle.waitForExist()
		expect(resultsTitle).toHaveText('Search Results:')
	})
})
