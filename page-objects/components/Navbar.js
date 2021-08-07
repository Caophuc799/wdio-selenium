import Base from '../Base'

class Navbar extends Base {
   get signInButton() {
       return $('#signin_button')
   }

   clickSignInButton() {
       this.signInButton.click();
   }
   insideNavbarIsVisible() {
       return $('.nav-tabs').waitForExist()
   }

}

export default new Navbar();