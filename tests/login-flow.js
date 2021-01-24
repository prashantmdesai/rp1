describe('rudhir website', function(){

    it('rudhir login', function(){
        browser.get('http://devrudh.s3-website.ap-south-1.amazonaws.com/');
        
        let loginLink = element(by.id('nav-login'));
        loginLink.click();
        browser.sleep(1000);

        let userIdInput = element(by.name('username'));
        userIdInput.sendKeys('raj.kapoor@rudhir.org');
        browser.sleep(1000);

        let passWdInput = element(by.name('password'));
        passWdInput.sendKeys('demo123');
        browser.sleep(1000);

        //input.btn.btn-primary
        let loginButton = element(by.className('btn btn-primary'));
        loginButton.click();

        browser.sleep(1000);

        let logoutLink = element(by.id('nav-logout'));
        expect(logoutLink.getText()).toEqual('Logout');

        logoutLink.click();

        browser.sleep(1000);

    }, 120000);

});