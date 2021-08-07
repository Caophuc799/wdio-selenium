import { short } from '../../config/timeouts'
describe('E2E Testing - Login/Logout', () => {
	it('should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const button = $('#signin_button');
        button.waitForExist();
        button.click();
        $('#login_form').waitForExist();
        $('#user_login').setValue('caocao');
        $('#user_password').setValue('caocao');
        $('input[type="submit"').click();
        const alertError = $('.alert-error');
        expect(alertError).toHaveText('Login and/or password are wrong.')
	})

    it('should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const button = $('#signin_button');
        button.waitForExist();
        button.click();
        $('#login_form').waitForExist();
        $('#user_login').setValue('username');
        $('#user_password').setValue('password');
        $('input[type="submit"').click();
        $('.nav-tabs').waitForExist();
	})

    it('should logout app', () => {
		$('.icon-user').waitForExist();
        $('.icon-user').click();
        $('#logout_link').waitForExist();
        $('#logout_link').click();
        $('#pages-nav').waitForExist();
	})
})