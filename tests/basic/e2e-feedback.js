import App from '../../page-objects/App'
describe('E2E Testing - Feedback', () => {
	it('should load feedback form', () => {
        App.openHomePage()
        const feedBackButton = $('#feedback');
        feedBackButton.waitForExist();
        feedBackButton.click();
        $('form').waitForExist();
	})

    it('should submit feedback form', () => {
        $('#name').setValue('Cao Cao');
        $('#email').setValue('caocao@email.com');
        $('#subject').setValue('subject');
        $('#comment').setValue('Comment');
        $('input[type="submit"').click();
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
	})
})