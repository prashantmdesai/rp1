describe('rudhir website', function () {

  it('rudhir patient registration', function () {

    var selectDropdownbyNum = function (element, optionNum) {
      if (optionNum) {
        var options = element.all(by.tagName('option'))
          .then(function (options) {
            options[optionNum].click();
          });
      }
    };

    var closeAlert = async function (acceptAlert) {
      try {
        let otpAlert = await browser.switchTo().alert();
        if (acceptAlert) {
          return otpAlert.accept();
        }

        return otpAlert.dismiss();
      } catch (e) { console.log(" Exception caught " + e); }
    };


    console.log("Navigating to landing page");
    browser.get('http://devrudh.s3-website.ap-south-1.amazonaws.com/');

    console.log("Clicking on Patient Registration Link");
    let patientRegistrationLink = element(by.id('nav-patient-register'));
    patientRegistrationLink.click();
    browser.sleep(1000);

    console.log("Filling Patient First Name");
    let patientFirstName = element(by.id('patientFirstName'));
    patientFirstName.sendKeys('Neptune1');
    browser.sleep(1000);

    console.log("Filling Patient Last Name");
    let patientLastName = element(by.id('patientLastName'));
    patientLastName.sendKeys('Alien1');
    browser.sleep(1000);

    console.log("Filling Patient Appeal");
    let patientAppeal = element(by.id('patientAppeal'));
    patientAppeal.sendKeys('You guys are awesome1!');
    browser.sleep(1000);

    console.log("Filling Patient Age");
    let patientAge = element(by.id('age'));
    patientAge.sendKeys('100');
    browser.sleep(1000);

    console.log("Selecting Patient Blood Group");
    let patientBloodGroup = element(by.id('bloodGroup'));

    selectDropdownbyNum(patientBloodGroup, 0);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' Select Your Blood Group ');

    selectDropdownbyNum(patientBloodGroup, 1);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' A+ ');

    selectDropdownbyNum(patientBloodGroup, 2);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' B+ ');

    selectDropdownbyNum(patientBloodGroup, 3);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' AB+ ');

    selectDropdownbyNum(patientBloodGroup, 4);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' O+ ');

    selectDropdownbyNum(patientBloodGroup, 5);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' A- ');

    selectDropdownbyNum(patientBloodGroup, 6);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' B- ');

    selectDropdownbyNum(patientBloodGroup, 7);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' AB- ');

    selectDropdownbyNum(patientBloodGroup, 8);
    expect(patientBloodGroup.$('option:checked').getText()).toEqual(' O- ');

    selectDropdownbyNum(patientBloodGroup, 4);
    browser.sleep(1000);

    console.log("Filling Units Required ");
    let bloodUnits = element(by.css('[ng-reflect-name="bloodUnits"]'));
    bloodUnits.clear();
    bloodUnits.sendKeys('2');
    browser.sleep(1000);


    console.log("Selecting Patient Gender");
    let patientGender = element(by.id('gender'));

    selectDropdownbyNum(patientGender, 0);
    expect(patientGender.$('option:checked').getText()).toEqual('Select Gender');

    selectDropdownbyNum(patientGender, 1);
    expect(patientGender.$('option:checked').getText()).toEqual('Male');

    selectDropdownbyNum(patientGender, 2);
    expect(patientGender.$('option:checked').getText()).toEqual('Female');

    selectDropdownbyNum(patientGender, 3);
    expect(patientGender.$('option:checked').getText()).toEqual('Other');

    selectDropdownbyNum(patientGender, 4);
    expect(patientGender.$('option:checked').getText()).toEqual('Unspecified');

    selectDropdownbyNum(patientGender, 3);
    browser.sleep(1000);


    console.log("Filling Valid Till ");
    let validTill = element(by.id('validTill'));
    validTill.clear();
    validTill.sendKeys('12/11/2011');
    browser.sleep(1000);

    console.log("Filling Patient Cell Number ");
    let patientCellNumber = element(by.id('patientCellNumber'));
    patientCellNumber.clear();
    patientCellNumber.sendKeys('2890090203');
    browser.sleep(1000);

    console.log("Filling Relative First Name ");
    let relativeFirstName = element(by.id('relativeFirstName'));
    relativeFirstName.clear();
    relativeFirstName.sendKeys('Chanda');
    browser.sleep(1000);

    console.log("Filling Relative Last Name  ");
    let relativeLastName = element(by.id('relativeLastName'));
    relativeLastName.clear();
    relativeLastName.sendKeys('Mama');
    browser.sleep(1000);

    console.log("Filling Relative Cell Number ");
    let relativeCellNumber = element(by.id('relativeCellNumber'));
    relativeCellNumber.clear();
    relativeCellNumber.sendKeys('2890090002');
    browser.sleep(1000);

    console.log("Filling Hospital Coordinator Name ");
    let hcname = element(by.id('hcname'));
    hcname.clear();
    hcname.sendKeys('Elon Musk');
    browser.sleep(1000);

    console.log("Filling Hospital Coordinator Cell Number ");
    let hcellnumber = element(by.id('hcellnumber'));
    hcellnumber.clear();
    hcellnumber.sendKeys('2893222325');
    browser.sleep(1000);

    console.log("Filling Hospital Name ");
    let hname = element(by.id('hname'));
    hname.clear();
    hname.sendKeys('International Space Hospital');
    browser.sleep(1000);

    console.log("Filling Hospital Area/Locality ");
    let harea = element(by.id('harea'));
    harea.clear();
    harea.sendKeys('Banyan tree locality');
    browser.sleep(1000);

    console.log("Filling Hospital City ");
    let hcity = element(by.id('hcity'));
    hcity.clear();
    hcity.sendKeys('Zebulon');
    browser.sleep(1000);

    console.log("Filling Hospital Pin Code");
    let hpinCode = element(by.id('hpinCode'));
    hpinCode.clear();
    hpinCode.sendKeys('920232');
    browser.sleep(1000);

    console.log("Clicking on Register");
    let registerButton = element(by.className('btn btn-primary btn-lg'));
    registerButton.click();

    // console.log("Clicking on Register");
    // let otpTxtField = element(by.className('form-control ng-valid ng-touched ng-dirty'));
    // otpTxtField.sendKeys('123abc');

    console.log("Accepting Otp Alert");
    browser.sleep(3000);
    closeAlert(true);

    console.log("Filling Patient Otp Number ");
    let patientOtp = element(by.css('[placeholder = "Enter your OTP"]')); //element(by.name('otp'));
    patientOtp.clear();
    patientOtp.sendKeys('123abc');
    browser.sleep(1000);

    console.log("Clicking on Verify");
    let verifyButton = element(by.className('btn btn-primary'));
    verifyButton.click();

    console.log("Patient Registration Completed");

    browser.sleep(1000);

  }, 130000);

});