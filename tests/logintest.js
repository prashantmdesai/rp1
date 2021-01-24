let loginpage = require('../pages/loginpage');

describe('login tests', function () {

    it('login test', function () {

        loginpage.get('http://devrudh.s3-website.ap-south-1.amazonaws.com/login');

        loginpage.enterFirstNumber('4');

        loginpage.enterSecondNumber('3');

        loginpage.clickGo();

        loginpage.verifyResult('Logout');

        browser.sleep(2000)

    });

    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo1();

        homepage.verifyResult('7');

        browser.sleep(2000)

    });

   

});