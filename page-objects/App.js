import Navbar from "./components/Navbar";

class App {
    openHomePage () {
        browser.url('http://zero.webappsecurity.com/index.html')
    }

    openLoginPage() {
        this.openHomePage();
        Navbar.clickSignInButton();
    }
}

export default new App();
