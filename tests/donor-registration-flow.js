describe('rudhir website', function () {

    it('rudhir donor registration flow', function () {

        var selectDropdownbyNum = function (element, optionNum) {
            if (optionNum) {
                var options = element.all(by.tagName('option'))
                    .then(function (options) {
                        options[optionNum].click();
                    });
            }
        };

        console.log("Navigating to landing page");
        let url = 'http://devrudh.s3-website.ap-south-1.amazonaws.com/';
        browser.get(url);

        console.log("Clicking on Donar Registration Link");
        let donarRegistrationLink = element(by.xpath("//h6[contains(text(),'Donor Registration')]"));
        donarRegistrationLink.click();
        browser.sleep(1000);

        console.log("Filling Donor First Name");
        let donorFirstName = element(by.css('input[name="firstName"]')).click();
        donorFirstName.sendKeys('DonorFirstName');
        browser.sleep(1000);

        console.log("Filling Donor Last Name");
        let donorLastName = element(by.css('input[name="lastName"]')).click();
        donorLastName.sendKeys('DonorLastName');
        browser.sleep(1000);

        console.log("Filling Donor Age");
        let donorAge = element(by.css('select[name="age"]')).click();
        donorAge.sendKeys('39');
        browser.sleep(1000);

        console.log("Selecting Donor Blood Group");
        let donorBloodGroup = element(by.name('bloodGroup'));

        selectDropdownbyNum(donorBloodGroup, 0);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual('Select Your Blood Group');

        selectDropdownbyNum(donorBloodGroup, 1);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' A+ ');

        selectDropdownbyNum(donorBloodGroup, 2);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' B+ ');

        selectDropdownbyNum(donorBloodGroup, 3);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' AB+ ');

        selectDropdownbyNum(donorBloodGroup, 4);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' O+ ');

        selectDropdownbyNum(donorBloodGroup, 5);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' A- ');

        selectDropdownbyNum(donorBloodGroup, 6);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' B- ');

        selectDropdownbyNum(donorBloodGroup, 7);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' AB- ');

        selectDropdownbyNum(donorBloodGroup, 8);
        expect(donorBloodGroup.$('option:checked').getText()).toEqual(' O- ');

        selectDropdownbyNum(donorBloodGroup, 4);
        browser.sleep(1000);


        console.log("Last Blood Donation ");
        let lastDonation = element(by.name('lastBloodDonationDate'));
        lastDonation.clear();
        lastDonation.sendKeys('09/11/2006');
        browser.sleep(1000);


        console.log("Selecting Donor Gender");
        let donorGender = element(by.name('gender'));

        selectDropdownbyNum(donorGender, 0);
        expect(donorGender.$('option:checked').getText()).toEqual('Select Gender');

        selectDropdownbyNum(donorGender, 1);
        expect(donorGender.$('option:checked').getText()).toEqual('Male');

        selectDropdownbyNum(donorGender, 2);
        expect(donorGender.$('option:checked').getText()).toEqual('Female');

        selectDropdownbyNum(donorGender, 3);
        expect(donorGender.$('option:checked').getText()).toEqual('Other');

        selectDropdownbyNum(donorGender, 4);
        expect(donorGender.$('option:checked').getText()).toEqual('Unspecified');

        selectDropdownbyNum(donorGender, 2);
        browser.sleep(1000);


        console.log("Filling Emailid");
        let donorEmailID = element(by.name('emailId')).click();
        donorEmailID.sendKeys('testtest@yahoo.com');
        browser.sleep(1000);

        console.log("Filling donor Cell Number ");
        let donorCellNumber = element(by.css('input[name="cellNumber"]')).click();
        donorCellNumber.clear();
        donorCellNumber.sendKeys('9203423333');
        browser.sleep(1000);


        console.log("Filling Society Name");
        let donarSocietyName = element(by.css('input[name="society"]')).click();
        donarSocietyName.sendKeys('Chitrahar');
        browser.sleep(1000);

        console.log("Filling Area Name");
        let donarAreaName = element(by.css('input[name="area"]')).click();
        donarAreaName.sendKeys('MolachaOdha');
        browser.sleep(1000);

        console.log("Filling City Name");
        let donarCityName = element(by.css('input[name="city"]')).click();
        donarCityName.sendKeys('Satara');
        browser.sleep(1000);

        console.log("Filling Pincode");
        let donarPinCode = element(by.css('input[name="pin"]')).click();
        donarPinCode.sendKeys('415044');
        browser.sleep(1000);

        console.log("Filling Office Building");
        let donarOfficeBuilding = element(by.css('input[name="officeBuilding"]')).click();
        donarOfficeBuilding.sendKeys('Pimpawade');
        browser.sleep(1000);

        console.log("Filling Office Area");
        let donarOfficeArea = element(by.css('input[name="officeArea"]')).click();
        donarOfficeArea.sendKeys('Pimpawade');
        browser.sleep(1000);

        console.log("Filling Office City");
        let donarOfficeCity = element(by.css('input[name="officeCity"]')).click();
        donarOfficeCity.sendKeys('Satara');
        browser.sleep(1000);

        console.log("Filling Office Pincode");
        let donarOfficePinCode = element(by.css('input[name="officePin"]')).click();
        donarOfficePinCode.sendKeys('415044');
        browser.sleep(1000);


        console.log("Clicking on Register");
        let registerButton = element(by.className('btn btn-primary btn-lg'));
        registerButton.click();

        console.log("Clicking on Register");
        let otpTxtField = element(by.className('form-control ng-valid ng-touched ng-dirty'));
        otpTxtField.sendKeys('123abc');

        console.log("Clicking on Verify");
        let verifyButton = element(by.className('btn btn-primary btn-lg'));
        verifyButton.click();

        console.log("Accepting Alert");
        //let tAndCAlert = browser.switchTo().alert();
        //expect((tAndCAlert.getText()).toEqual('By registering with us, you agree to following\\n1. The information will be used to match blood groups for blood donations\\n2. rudhir.org may share this information to associated hospitals/blood bank as needed and they may contact you.\\n3. You agree to receive automated SMS notification for blood donation requirements.'));
        //console.log(tAndCAlert.getText());
        //tAndCAlert.accept();
        browser.driver.switchTo().alert().then( // <- this fixes the problem
            function (alert) {
              alert.accept();
            },
            function (error) {
            }
          );
        

    }, 120000);


});