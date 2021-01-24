let loginpage = function(){
    
    let userName_input = element(by.name('username'));
    let pwd_input = element(by.name('password'));
    let loginButton = element(by.className('btn btn-primary'));

    this.get = function(url){
        browser.get(url);
    }

    this.enterUserName = function(userNm){
        userName_input.sendKeys(userNm);
    };

    this.enterPassword = function(pwd){
        pwd_input.sendKeys(pwd);
    };

    this.clickLogin = function(){
        loginButton.click();
    };

    this.verifyResult = function(result){
        let logoutLink = element(by.id('nav-logout'));
        expect(logoutLink.getText()).toEqual(result);
    }
};

module.exports = new loginpage();