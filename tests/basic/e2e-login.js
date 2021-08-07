import App from '../../page-objects/App'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
describe('E2E Testing - Login/Logout', () => {
	it('should not login with invalid credentials', () => {
        App.openHomePage()
        Navbar.clickSignInButton();
        LoginPage.formIsVisible();
        LoginPage.fillForm('caocao', 'caocao');
        LoginPage.submitForm()
        const alertError = $('.alert-error');
        expect(alertError).toHaveText('Login and/or password are wrong.')
	})

    it('should login with valid credentials', () => {
        App.openHomePage()
        Navbar.clickSignInButton();
        LoginPage.formIsVisible();
        LoginPage.fillForm('username', 'password');
        LoginPage.submitForm()
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