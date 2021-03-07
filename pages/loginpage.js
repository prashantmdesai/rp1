let loginpage = function () {
    const loginLink = element(by.id("nav-login"));
    const usernameInput = element(by.name("username"));
    const passwordInput = element(by.name("password"));
    const loginButton = element(by.className("btn btn-primary"));
    const logoutLink = element(by.id("nav-logout"));

    this.get = function (url) {
        browser.get(url);
    };

    this.clickLoginLink = function () {
        loginLink.click();
    };

    this.enterUsername = function (username) {
        usernameInput.sendKeys(username);
    };

    this.enterPassword = function (password) {
        passwordInput.sendKeys(password);
    };

    this.clickLoginButton = function () {
        loginButton.click();
    };

    this.clickLogoutLink = function () {
        logoutLink.click();
    };

    this.verifyAlert = function (errMsg) {
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 10000);
        const alert = browser.switchTo().alert();
        expect(alert.getText()).toEqual(errMsg);
        alert.accept();
    };
};

module.exports = new loginpage();
