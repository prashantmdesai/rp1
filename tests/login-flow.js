const loginpage = require("../pages/loginpage");
const errMsg = "Error: Username or password is incorrect";

describe("rudhir website", function () {
    beforeEach(function () {
        loginpage.get("http://devrudh.s3-website.ap-south-1.amazonaws.com/");
        loginpage.clickLoginLink();
    });

    it("correct credentials", function () {
        loginpage.enterUsername("raj.kapoor@rudhir.org");
        loginpage.enterPassword("demo123");
        loginpage.clickLoginButton();
        loginpage.clickLogoutLink();
    });

    it("incorrect password", function () {
        loginpage.enterUsername("raj.kapoor@rudhir.org");
        loginpage.enterPassword("wrong");
        loginpage.clickLoginButton();
        loginpage.verifyAlert(errMsg);
    });

    it("incorrect email", function () {
        loginpage.enterUsername("random@rudhir.org");
        loginpage.enterPassword("demo123");
        loginpage.clickLoginButton();
        loginpage.verifyAlert(errMsg);
    });

    it("incorrect email and password", function () {
        loginpage.enterUsername("random@rudhir.org");
        loginpage.enterPassword("wrong");
        loginpage.clickLoginButton();
        loginpage.verifyAlert(errMsg);
    });
});
